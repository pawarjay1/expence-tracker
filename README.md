# 💰 Expense Tracking Web App 

A simple and responsive expense tracker built using **React.js** that helps users record and manage their income and expenses. It calculates your balance in real-time and stores data locally in your browser so you don’t lose it on refresh.

---

## 📸 Demo

<a href="https://expence-tracker-2p7orttx1-pawarjay1s-projects.vercel.app/" > Live demo  </a>

---

## 🧾 Features

- ✅ Add income and expense transactions
- ✅ Automatically calculate total balance, income, and expenses
- ✅ Delete transactions
- ✅ Search transaction history
- ✅ Persist data using `localStorage`
- ✅ Responsive design for mobile and desktop
- ✅ Real-time updates with React state

---

## 🛠 Tech Stack

- ⚛️ **React.js** (Functional Components + Hooks)
- 🎯 **Context API** for state management (optional)
- 💾 **LocalStorage** for saving data
- 🎨 CSS / styled-components 

---

## ⚙️ Installation & Setup Guide

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/pawarjay1/expence-tracker.git
cd expense-tracker
```
### 2. Install Dependencies

```bash
npm install
npm i react-router-dom
npm i styled-components
```
### 3. Start the Development Server

```bash
npm run dev
```
Then open your browser and go to:
👉 http://localhost:5173


## 📁 Folder Structure

```bash
expense-tracker/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── modules/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── README.md
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── node_modules/

```

## 📋 How It Works

Users can input a description and amount for each transaction.

Amounts can be positive (income) or negative (expense).

Each transaction is added to a list, and clicking on (X) it will be delete it.

The app recalculates total balance, income, and expense in real time.

All transactions are saved to localStorage, so refreshing the page doesn't remove them.

## 🤝 Contributing
Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to improve.



