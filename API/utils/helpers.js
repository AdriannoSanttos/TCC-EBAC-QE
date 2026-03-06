function gerarCodigoUnico(prefixo = 'TESTE') {
  return `${prefixo}${Date.now()}`;
}

function logBug(testeId, descricao) {
  console.log(`\nBUG IDENTIFICADO: ${testeId}`);
  console.log(`Descricao: ${descricao}`);
  console.log(`Status Esperado: 400 Bad Request`);
  console.log(`Status Recebido: 201 Created`);
}

module.exports = { gerarCodigoUnico, logBug };
