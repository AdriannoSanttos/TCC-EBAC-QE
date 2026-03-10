import { $, $$ } from '@wdio/globals';

class CatalogoPage {
    
   
    get categorias() {
        return $$('android.widget.TextView');
    }

    get primeiraCategoria() {
        return $('android=new UiSelector().textContains("Category QA")');
    }

    
    async encontrarQualquerCategoria() {
        const elementos = await $$('android.widget.TextView');
        for (const elemento of elementos) {
            const texto = await elemento.getText();
            if (texto.includes('Category QA') || texto.includes('Categoria QA')) {
                return elemento;
            }
        }
        return null;
    }

    get noProductsMessage() {
        return $('android=new UiSelector().text("No products found")');
    }

    
    async aguardarAppCarregar() {
        await driver.pause(5000);
    }

    async abrirPrimeiraCategoria() {
        await this.aguardarAppCarregar();
        
        
        try {
            const categoria = await this.primeiraCategoria;
            await categoria.waitForDisplayed({ timeout: 15000 });
            await categoria.click();
            return;
        } catch (error) {
            console.log('Seletor primário falhou, tentando método alternativo...');
        }
        
       
        const categoriaAlt = await this.encontrarQualquerCategoria();
        if (categoriaAlt) {
            await categoriaAlt.click();
        } else {
            throw new Error('Não foi possível encontrar nenhuma categoria');
        }
    }

    async isMensagemSemProdutosVisivel() {
        try {
            await this.noProductsMessage.waitForDisplayed({ timeout: 15000 });
            return true;
        } catch (error) {
            console.log('Mensagem "No products found" não encontrada');
            return false;
        }
    }

    async getTextoSemProdutos() {
        try {
            await this.noProductsMessage.waitForDisplayed({ timeout: 15000 });
            return await this.noProductsMessage.getText();
        } catch (error) {
            return null;
        }
    }

    async getQuantidadeCategorias() {
        await this.aguardarAppCarregar();
        const elementos = await this.categorias;
        const categoriasValidas = [];
        
        for (const el of elementos) {
            const texto = await el.getText();
            if (texto && texto.length > 0 && texto.includes('Category')) {
                categoriasValidas.push(el);
            }
        }
        
        return categoriasValidas.length;
    }
}

export default new CatalogoPage();