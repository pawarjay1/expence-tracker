import React from 'react'
import { useContext } from 'react';
import { AppData } from '../context/Datacontext';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  font-size: 16px;
  width: 100%;
`;

const AddTransactionContainer = styled.div`
  font-size: 15px;
  // display: ${(props) => (props.isAddTxnVisible ? "flex" : "none")};
  color: #0d1d2c;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  width: 100%;
  align-items: center;
  padding: 15px 20px;
  margin: 0px 15px;
 
  gap: 10px;
  & input {
    width: 90%;
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;
const AddTransaction = styled.div`
  font-size: 15px;
  background: #0d1d2c;
  display: flex;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;
`;

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;
const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;

export const AddExpanse = (props) => {
  const { amount, setAmount, desc, setDesc, type, setType, transactions, updateTransaction, expense, income } = useContext(AppData);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  return (
    <Container>
      Balance: ₹{income - expense}
      <ExpenseContainer>
        <ExpenseBox>
          Expense<span>₹{expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>₹{income}</span>
        </ExpenseBox>
      </ExpenseContainer>

      <ExpenseContainer>

        <AddTransactionContainer>
          <input
            placeholder="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <RadioBox>
            <input
              type="radio"
              id="expense"
              name="type"
              value="EXPENSE"
              checked={type === "EXPENSE"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              name="type"
              value="INCOME"
              checked={type === "INCOME"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="Expense">Income</label>
          </RadioBox>

          <NavLink to="/" style={{ textDecoration: "none" }}>
            <AddTransaction
              onClick={() => {
                if(amount.trim()==="" || desc.trim() === "")
                addTransaction({
                  id: Date.now(),
                  amount: Number(amount),
                  desc,
                  type,
                })
                setAmount("");
                setDesc("");
              }
              }
            >
              Add Transaction
            </AddTransaction>
          </NavLink>

        </AddTransactionContainer>
      </ExpenseContainer>

    </Container>
  );
}
