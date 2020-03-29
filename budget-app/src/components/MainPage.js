import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Content from "./Content";

const MainPage = () => {
  const dispatch = useDispatch();
  const reducer = useSelector(state => ({
    ...state.dataReducer
  }));

  const { data } = reducer;

  const addData = item => {
    dispatch({ type: "ADD_DATA", payload: item });
  };

  const delItem = item => {
    dispatch({ type: "DELETE_ITEM", payload: item });
  };

  const income = data.filter(inc => inc.options === "income");
  const expense = data.filter(ex => ex.options === "expense");

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
        data={data}
        getTotalExpense={getTotalExpense}
        getTotalIncome={getTotalIncome}
        avalibleNow={avalibleNow}
        dateCreated={dateCreated}
      />
      <Content
        income={income}
        expense={expense}
        delItem={delItem}
        addData={addData}
      />
    </div>
  );
};

export default MainPage;
