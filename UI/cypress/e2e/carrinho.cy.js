import CarrinhoPage from '../support/pages/CarrinhoPage';
import produtos from '../fixtures/produtos.json';

describe('US-0001 - Adicionar Item ao Carrinho', () => {

  beforeEach(() => {
    CarrinhoPage.visit();
  });

  it('CT-CARR-01 - Deve adicionar produto disponível ao carrinho', () => {
    const produto = produtos.produtoValido;
    
    CarrinhoPage.selectProduct(produto.nome);
    CarrinhoPage.selectTamanho(produto.tamanho);
    CarrinhoPage.selectCor(produto.cor);
    CarrinhoPage.addToCart();
    
    CarrinhoPage.checkSuccessMessage(produto.nome);
    CarrinhoPage.goToCart();
    CarrinhoPage.checkProductInCart(produto.nome, produto.tamanho, produto.cor);
    CarrinhoPage.checkout();
  });

  it('CT-CARR-02 - Deve impedir adicionar produto fora de estoque', () => {
    const produto = produtos.produtoValido;
    const foraEstoque = produtos.produtoForaEstoque;
    
    CarrinhoPage.selectProduct(produto.nome);
    CarrinhoPage.selectTamanho(foraEstoque.tamanho);
    CarrinhoPage.selectCor(foraEstoque.cor);
    
    CarrinhoPage.checkBotaoDesabilitado();
    CarrinhoPage.checkForaEstoque();
  });

  it('CT-CARR-03 - Não deve permitir mais de 10 unidades do mesmo produto (BUG - SISTEMA PERMITE)', () => {
    const produto = produtos.produtoValido;
    
    CarrinhoPage.selectProduct(produto.nome);
    CarrinhoPage.selectTamanho(produto.tamanho);
    CarrinhoPage.selectCor(produto.cor);
    CarrinhoPage.setQuantidade(produtos.quantidades.acimaLimite);
    CarrinhoPage.addToCart();
    
    CarrinhoPage.checkSuccessMessage(produto.nome, produtos.quantidades.acimaLimite);
    CarrinhoPage.checkBugLimiteUnidades();
  });

  it('CT-CARR-04 - Carrinho entre R$200 e R$600 deve gerar cupom de 10%', () => {
    const produto = produtos.produtoValido;
    
    CarrinhoPage.selectProduct(produto.nome);
    CarrinhoPage.selectTamanho(produto.tamanho);
    CarrinhoPage.selectCor(produto.cor);
    CarrinhoPage.wait(1000);
    
    CarrinhoPage.setQuantidade(produtos.quantidades.cupom10);
    CarrinhoPage.addToCart();
    
    CarrinhoPage.checkSuccessMessage(produto.nome, produtos.quantidades.cupom10);
    CarrinhoPage.checkMensagemCupom('10');
    CarrinhoPage.goToCart();
    CarrinhoPage.checkCarrinhoCupom('10');
  });

  it('CT-CARR-05 - Carrinho acima de R$600 deve gerar cupom de 15%', () => {
    const produto = produtos.produtoValido;
    
    CarrinhoPage.selectProduct(produto.nome);
    CarrinhoPage.selectTamanho(produto.tamanho);
    CarrinhoPage.selectCor(produto.cor);
    CarrinhoPage.wait(1000);
    
    CarrinhoPage.setQuantidade(produtos.quantidades.cupom15);
    CarrinhoPage.addToCart();
    
    CarrinhoPage.checkSuccessMessage(produto.nome, produtos.quantidades.cupom15);
    CarrinhoPage.checkMensagemCupom('15');
    CarrinhoPage.goToCart();
    CarrinhoPage.checkCarrinhoCupom('15');
  });
});