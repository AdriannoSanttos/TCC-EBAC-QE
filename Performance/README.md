# Testes de Performance - K6

## Sobre
Testes de performance implementados com K6 para a EBAC Shop (US-0003 - Cupons).

## Cenários Testados
- GET /wp-json/wc/v3/coupons - Listagem de cupons
- POST /wp-json/wc/v3/coupons - Cadastro de novo cupom

## Configuração do Teste
- Usuários virtuais (VUs): 20
- Duração: 2 minutos
- Massa de dados: Geração dinâmica de códigos únicos

## Thresholds Configurados
- http_req_duration: p(95) < 2000ms (2 segundos)
- http_req_failed: taxa de erro < 5%

## Como executar
k6 run scripts/cupons-performance.js

## Resultados (do seu TCC)
- Total de requisições: 632
- Requisições por segundo: 5,04
- Taxa de sucesso: 99,84%
- Tempo médio de resposta: 2,87s
- Percentil 95 (p95): 3,67s
- Taxa de falha: 0,15%

## Análise
O threshold p(95) < 2s não foi atingido (alcançou 3,67s), indicando degradação de performance sob carga de 20 usuários simultâneos. A taxa de erro (0,15%) está dentro do aceitável (<5%).

## Estrutura
- /scripts - Scripts de teste K6
- /resultados - Relatórios de execução
- /reports - Relatórios gerados
