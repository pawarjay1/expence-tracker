import { createContext } from "react";

import { useState } from "react";

export const AppData = createContext(null);

export const Datacontext = (props) => {

    const [transactions, updateTransaction] = useState(() => { 
        const saved = localStorage.getItem('transactions');
        return saved ? JSON.parse(saved) : [];
    });
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");

    const [searchText, updateSearchText] = useState("");
    const [filteredTransaction, updateTxn] = useState(transactions);

    return (
        <AppData.Provider value={{
            transactions: transactions, updateTransaction: updateTransaction,
            expense: expense, updateExpense: updateExpense,
            income: income, updateIncome: updateIncome,
            amount: amount, setAmount: setAmount,
            desc: desc, setDesc: setDesc,
            type: type, setType: setType,
            searchText: searchText, updateSearchText: updateSearchText,
            filteredTransaction: filteredTransaction, updateTxn: updateTxn,

        }}>
            {props.children}
        </AppData.Provider>
    )
}