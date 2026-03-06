# UI Tests - EBAC Shop

## Sobre
Testes automatizados de interface web para a EBAC Shop.

## Funcionalidades Testadas
- US-0001: Adicionar item ao carrinho
- US-0002: Login na plataforma

## Tecnologias
- Cypress
- Page Objects Pattern

## Estrutura
- /cypress/e2e - Arquivos de teste refatorados
- /cypress/support/pages - Page Objects
- /cypress/fixtures - Dados de teste (usuários, produtos)
- /cypress/support - Comandos customizados

## Dados de Teste
- Usuários: armazenados em fixtures/usuarios.json
- Produtos: armazenados em fixtures/produtos.json

## Como executar
npm install
npm test
npm test:open

## Bugs Documentados
- CT-CARR-03: Sistema permite mais de 10 unidades
- CT-CARR-04: Cupom de 10% não é gerado
- CT-CARR-05: Cupom de 15% não é gerado
- CT-LOGIN-04: Bloqueio de 15 minutos não implementado