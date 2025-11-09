# 🧪 Banco API - Testes de Performance com k6

Este repositório contém os testes de performance da **Banco API**, utilizando a ferramenta [k6](https://k6.io/).
O objetivo é avaliar o desempenho, estabilidade e comportamento da API sob diferentes níveis de carga.

---

## 📘 Introdução

O projeto foi desenvolvido para simular cenários de uso real da **Banco API** de Julio de Lima pode ser encontrado no repositorio: https://github.com/juliodelimas/banco-api , medindo métricas como:
- Tempo médio de resposta (latência)
- Taxa de requisições por segundo (RPS)
- Percentis de resposta (p90, p95, p99)
- Erros e falhas de requisição
- Consumo de recursos durante execução prolongada

Esses testes ajudam na **garantia de qualidade (QA)** e na **observabilidade**, permitindo identificar gargalos e pontos de melhoria no backend.

---

## ⚙️ Tecnologias Utilizadas

- **JavaScript** – Linguagem usada nos scripts de teste.
- **k6** – Ferramenta open source para testes de performance e carga.
- **Node.js** – Utilizado para scripts auxiliares e gerenciamento de dependências.
- **NPM** – Gerenciador de pacotes utilizado para instalação e execução local.

---

## 🗂️ Estrutura do Repositório

```
Banco-api-performance/
├── test/                   # Pasta principal dos testes
│   ├── login.test.js      # Testes de autenticação
│   ├── transferencias.test.js # Testes de transferências
├── helpers/               # Funções auxiliares
│   └── autenticacao.js    # Helper para autenticação
├── utils/                 # Utilitários e configurações
│   └── variaveis.js       # Variáveis de ambiente e configurações
├── data/                  # Dados para os testes
└── README.md              # Este arquivo

```

---

## 🎯 Objetivo de Cada Grupo de Arquivos

🎯 Objetivo de Cada Grupo de Arquivos
test/
Contém todos os arquivos de teste organizados por funcionalidade:

login.test.js: Testes relacionados à autenticação e login

transferencias.test.js: Testes de transferências entre contas


helpers/
Funções auxiliares reutilizáveis:

autenticacao.js: Gerencia autenticação, tokens das sessões

utils/
Configurações e variáveis globais:

fixtures/
arquivo json contendo a senha e o usuário para teste da api

---

## 🧩 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/pedrofi96/Banco-api-performance.git
   cd Banco-api-performance
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
---

## 🚀 Execução dos Testes
Execução Básica
bash
# Executar um teste específico
k6 run test/login.test.js

# Executar teste de transferências
k6 run test/transferencias.test.js


bash
k6 run --vus 10 --duration 30s test/login.test.js
Teste com 50 usuários virtuais por 1 minuto:

bash
k6 run --vus 50 --duration 1m test/transferencias.test.js
Teste com 100 usuários virtuais por 5 minutos:

bash
k6 run --stages 30s:10,1m:50,30s:0 test/login.test.js
Execução com Environment Variables
bash
K6_BASE_URL=http://localhost:3000 k6 run test/login.test.js
Execução com Saída em JSON
bash

---

## 📊 Execução com Dashboard e Exportação de Relatório

Para acompanhar o resultado **em tempo real** no navegador e **gerar um relatório HTML**, execute:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/load/load.test.js
```

Isso abrirá um **dashboard interativo** local (geralmente em `http://127.0.0.1:5665`) e exportará o resultado completo para `html-report.html`.

---

👨‍💻 **Autor:** [Pedro Filipe](https://github.com/pedrofi96)
