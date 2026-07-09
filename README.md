

![Capa do Projeto](Capa.png)

---

# 📌 Sobre o Projeto

Aplicação web de **Educação Financeira com IA** desenvolvida para ajudar pessoas a simularem sua situação financeira de forma simples, visual e educativa.

O projeto foi desenvolvido utilizando **React, TypeScript, Vite, CSS e recursos de persistência no navegador**, com foco em Front-End moderno, experiência do usuário, visualização de dados e orientação financeira acessível.

A aplicação permite analisar informações como:

* Renda mensal
* Gastos fixos
* Gastos variáveis
* Dívidas ou parcelas
* Objetivo financeiro
* Nível de conhecimento financeiro
* Saldo final
* Score financeiro

---

<p align="center">
  <img src="assets/imagens/capa-educador-financeiro.png" width="100%">
</p>

<p align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Financial Education](https://img.shields.io/badge/Educação%20Financeira-0891B2?style=for-the-badge)
![Data Visualization](https://img.shields.io/badge/Data%20Visualization-2563EB?style=for-the-badge)

</p>

---

# ✨ Funcionalidades

✅ Tela inicial profissional

✅ Formulário financeiro em etapas

✅ Validação dos campos

✅ Diagnóstico financeiro educativo

✅ Score financeiro de 0 a 100

✅ Gráfico financeiro com Recharts

✅ Histórico de simulações

✅ Chatbot financeiro local

✅ Perguntas rápidas no chatbot

✅ Tema claro e escuro

✅ Persistência com LocalStorage

✅ Exportação do diagnóstico em PDF

✅ Interface responsiva

✅ Estrutura preparada para futura integração com IA Generativa

---

# 📊 Indicadores Financeiros

### Renda mensal

Permite informar a renda principal da pessoa usuária para simular sua situação financeira.

### Gastos fixos

Considera despesas recorrentes como aluguel, energia, internet, mercado, transporte e outras contas mensais.

### Gastos variáveis

Analisa despesas que podem mudar de mês para mês, como lazer, compras, alimentação fora de casa e gastos extras.

### Dívidas e parcelas

Permite informar compromissos financeiros mensais, como cartão de crédito, empréstimos, financiamentos ou compras parceladas.

### Saldo final

Calcula a diferença entre a renda mensal e o total de gastos informados.

### Score financeiro

Gera uma nota de 0 a 100 com base na relação entre renda, gastos, dívidas e saldo disponível.

### Diagnóstico educativo

Apresenta uma análise simples com pontos de atenção, recomendações e próximos passos para melhorar a organização financeira.

---

# 🏗️ Estrutura do Projeto

```text
educador_financeiro_ia/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ChatBot.tsx
│   │   ├── FinanceChart.tsx
│   │   ├── Header.tsx
│   │   ├── ResultCard.tsx
│   │   ├── SimulationHistory.tsx
│   │   ├── StepForm.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── WelcomeScreen.tsx
│   │
│   ├── services/
│   │   └── geminiService.ts
│   │
│   ├── types/
│   │   └── finance.ts
│   │
│   ├── utils/
│   │   └── storage.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
