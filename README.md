# 🧪 TCC – Engenheiro de Qualidade de Software

Projeto de automação de testes desenvolvido como Trabalho de Conclusão de Curso da EBAC.

## 🎯 Objetivo
Garantir a qualidade da aplicação EBAC Shop através de testes automatizados de:

- ✅ API
- ✅ Interface Web
- ✅ Aplicação Mobile
- ✅ Performance
- ✅ Integração Contínua

---

## 🧪 Tecnologias Utilizadas

| Tipo de Teste | Ferramenta |
|--------------|------------|
| API | Jest + Supertest |
| UI Web | Cypress |
| Mobile | Appium |
| Performance | k6 |
| CI/CD | GitHub Actions |

---

## ▶️ Como executar o projeto

### 🔹 Testes de API
```bash
cd API
npm install
npm test
```

### 🔹 Testes de Interface (UI)
```bash
cd UI
npm install
npx cypress run
```

### 🔹 Testes de Performance
```bash
cd Performance/scripts
k6 run cupons-performance.js
```

---

## 🐞 Bugs Encontrados

Durante os testes, foram identificadas falhas importantes:

- ❌ Sistema permite adicionar mais de 10 itens no carrinho
- ❌ Cupom de 10% não aplicado corretamente
- ❌ Cupom de 15% não aplicado corretamente
- ❌ API aceita criação de cupom sem campo obrigatório
- ⚠️ Degradação de performance sob carga simultânea

Evidências disponíveis na pasta:

/evidencias

---

## 📊 Resultados de Performance

Testes realizados com 20 usuários simultâneos utilizando k6 demonstraram:

- ⏱ p95 acima do limite aceitável
- ⚠️ Gargalos sob carga
- ✅ Estabilidade geral da API

---

## 👨‍💻 Autor
Adriano Santos