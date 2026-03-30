# 💰 Financial Dashboard

Um painel de controle financeiro interativo desenvolvido com **HTML, CSS e JavaScript**, agora evoluído para uma arquitetura completa com **API serverless e banco de dados PostgreSQL na nuvem**.

---

## 🚀 Funcionalidades

* ✔️ Adição de receitas e despesas
* ✔️ Cálculo automático do saldo total
* ✔️ Listagem dinâmica de transações
* ✔️ Integração com banco de dados real (PostgreSQL)
* ✔️ API serverless com Netlify Functions
* ✔️ Atualização em tempo real via requisições HTTP
* ✔️ Estrutura pronta para expansão (gráficos, filtros, categorias)

---

## 🧠 Tecnologias Utilizadas

* **Frontend**

  * HTML5
  * CSS3
  * JavaScript (Vanilla)

* **Backend (Serverless)**

  * Netlify Functions (Node.js)

* **Banco de Dados**

  * PostgreSQL (Neon / Netlify DB)

* **Ferramentas**

  * DBeaver (gerenciamento do banco)
  * Git & GitHub
  * Netlify (deploy)

---

## 🧱 Arquitetura do Projeto

```bash
financial-dashboard/
│
├── index.html
├── style.css
├── script.js
│
└── netlify/
    └── functions/
        └── getTransactions.js
```

---

## 🔗 Fluxo da Aplicação

```text
Frontend (Dashboard)
        ↓
Fetch API (JavaScript)
        ↓
Netlify Functions (API)
        ↓
PostgreSQL Database
```

---

## 📊 Banco de Dados

Tabela principal:

```sql
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🌐 Deploy

A aplicação está hospedada no Netlify:

🔗 https://my-finance-hub.netlify.app/

API disponível em:

```bash
/.netlify/functions/getTransactions
```

---

## 💡 Evolução do Projeto

Este projeto começou com persistência em **Google Sheets** e evoluiu para uma arquitetura mais robusta com:

* Banco de dados relacional (SQL)
* Backend serverless
* Integração real entre frontend e backend

---

## 📌 Próximos Passos

* 🔄 Inserção de dados via API (POST)
* 📈 Gráficos dinâmicos (Chart.js)
* 🏷️ Categorias de transações
* 🔐 Autenticação de usuários

---

## 👩‍💻 Autora

Desenvolvido por **Daiane** 🚀

---

## ⭐ Contribuição

Sinta-se à vontade para contribuir ou dar sugestões!

