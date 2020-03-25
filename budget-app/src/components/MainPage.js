import React, { useReducer } from "react";
import { initialValue, reducer } from "../reducers/reducer";
import Navbar from "./Navbar";
import Content from "./Content";

const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const sharedData = newData => {
    dispatch({ type: "ADD_DATA", payload: newData });
  };

  const delItem = id => {
    const del = state.data.filter(item => item.id !== id);
    dispatch({ type: "DELETE_ITEM", payload: del });
  };

  const income = state.data.filter(inc => inc.options === "income");
  const expense = state.data.filter(ex => ex.options === "expense");

  const getTotals = arr => {
    const totalIncome = arr.reduce((acc, curr) => {
      return curr.value + acc;
    }, 0);
    return totalIncome;
  };

  const getTotalIncome = getTotals(income);
  const getTotalExpense = getTotals(expense);
  const avalibleNow = getTotalIncome - getTotalExpense;

  getTotalExpense.toFixed(2);
  getTotalIncome.toFixed(2);
  avalibleNow.toFixed(2);

  const getDate = () => {
    const date = new Date().toDateString();
    return date;
  };

  const dateCreated = getDate();
  return (
    <div>
      <Navbar
        data={state.data}
        getTotalExpense={getTotalExpense}
        getTotalIncome={getTotalIncome}
        avalibleNow={avalibleNow}
        dateCreated={dateCreated}
      />
      <Content
        income={income}
        expense={expense}
        delItem={delItem}
        sharedData={sharedData}
      />
    </div>
  );
};

export default MainPage;
