# TCC - Engenharia de Qualidade de Software (EBAC)

![Status](https://img.shields.io/badge/status-concluído-green)
![Licença](https://img.shields.io/badge/licença-MIT-blue)
![CI](https://github.com/AdriannoSanttos/TCC-EBAC-QE/actions/workflows/ci.yml/badge.svg)

Este repositório contém o projeto de conclusão do curso de **Engenharia de Qualidade de Software** da **EBAC**. O objetivo foi aplicar uma estratégia completa de testes no e-commerce EBAC Shop, contemplando as histórias de usuário US-0001 (Carrinho), US-0002 (Login) e US-0003 (Cupons), além da funcionalidade de Catálogo de Produtos para mobile.

## 📋 Sobre o Projeto

O projeto demonstra a aplicação prática de conceitos fundamentais de qualidade de software, incluindo:

- Planejamento de testes com mapa mental
- Critérios de aceitação em Gherkin
- Casos de teste estruturados
- Automação em múltiplas camadas
- Integração contínua com GitHub Actions

## 🛠️ Tecnologias e Ferramentas

| Categoria | Tecnologia |
|-----------|------------|
| Testes Web | Cypress |
| Testes de API | Supertest, Jest |
| Testes Mobile | WebdriverIO, Appium (Android) |
| Testes de Performance | K6 |
| Integração Contínua | GitHub Actions |

## 📁 Estrutura do Repositório

TCC-EBAC-QE/
├── API/                 # Testes de API com Supertest + Jest
│   ├── schemas/         # Validação de contratos
│   ├── tests/           # Cenários de teste (US-0003 - Cupons)
│   └── reports/         # Relatórios de execução
├── UI/                  # Testes Web com Cypress
│   ├── fixtures/        # Massa de dados
│   ├── integration/     # Testes de login (US-0002)
│   ├── pageobjects/     # Page Objects
│   └── reports/         # Relatórios e evidências
├── Mobile/              # Testes Mobile com Appium + WebdriverIO
│   ├── test/
│   │   ├── specs/       # Testes do Catálogo de Produtos
│   │   └── pageobjects/ # Page Objects Mobile
│   ├── app/             # APK do aplicativo
│   └── reports/         # Relatórios Allure
└── Performance/         # Testes de Performance com K6
    ├── scripts/         # Scripts de teste
    └── results/         # Resultados e métricas

## 🚀 Como Executar os Testes

### Testes de API
cd API
npm install
npm test

### Testes de UI
cd UI
npm install
npm test

### Testes Mobile
cd Mobile
npm install
npm test

### Testes de Performance
cd Performance
k6 run scripts/cupons.js

## 🔄 Integração Contínua

Este projeto utiliza **GitHub Actions** para executar automaticamente todos os testes a cada push ou pull request na branch main.

O pipeline executa 4 jobs em paralelo:
- Testes de API (Ubuntu)
- Testes Web (Ubuntu)
- Testes Mobile (macOS)
- Testes de Performance (Ubuntu com Docker)

![GitHub Actions](https://github.com/AdriannoSanttos/TCC-EBAC-QE/actions/workflows/ci.yml/badge.svg)

Para visualizar as execuções:
1. Acesse a aba **Actions** do repositório
2. Clique no workflow "CI - Testes Automatizados"
3. Veja os logs detalhados de cada job

## 📊 Resultados

Durante a execução dos testes, foram identificadas **5 não conformidades**:

| História | Bug Encontrado |
|----------|----------------|
| US-0001 | Sistema permite adicionar mais de 10 unidades do mesmo produto |
| US-0001 | Cupom de 10% não é gerado para compras entre R$200 e R$600 |
| US-0001 | Cupom de 15% não é gerado para compras acima de R$600 |
| US-0002 | Bloqueio de 15 minutos após 3 tentativas de login não funciona |
| US-0003 | API aceita cadastro de cupom sem campo obrigatório (amount) |

Os relatórios detalhados estão disponíveis nas pastas `reports` de cada módulo.

## 📝 Documentação

O trabalho completo está documentado no arquivo [TCC_EBAC_QE.docx](./TCC_EBAC_QE.docx), contendo:
- Estratégia de testes (mapa mental)
- Critérios de aceitação em Gherkin
- Casos de teste detalhados
- Análise dos resultados

## 🏆 Lições Aprendidas

- A importância do planejamento antes da automação
- Como estruturar testes em múltiplas camadas (UI, API, Mobile)
- Validação de contratos em APIs
- Identificação e documentação de bugs
- Configuração de pipelines de CI/CD

## ✉️ Contato

**José Adriano dos Santos**  
Curso: Engenharia de Qualidade de Software - EBAC

GitHub: [@AdriannoSanttos](https://github.com/AdriannoSanttos)  
Projeto: [https://github.com/AdriannoSanttos/TCC-EBAC-QE](https://github.com/AdriannoSanttos/TCC-EBAC-QE)

---
