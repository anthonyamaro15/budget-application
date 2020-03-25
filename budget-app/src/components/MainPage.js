import React, { useState, useEffect, useReducer } from "react";
import { initialValue, reducer } from "../reducers/reducer";
import Navbar from "./Navbar";
import Content from "./Content";

const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     //  console.log(data);
  //   }, [data]);

  //   const passData = arr => {
  //     setData(arr);
  //   };
  console.log(state);
  //   console.log(data);
  const sharedData = newData => {
    dispatch({ type: "ADD_DATA", payload: newData });
    console.log("payload data ", newData);
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

  const getDate = () => {
    const date = new Date().toDateString();
    return date;
  };

  //   const delItem = id => {
  //     const del = data.filter(item => item.id !== id);
  //     console.log(del);
  //    //  setData(del);
  //   };

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
        //   passData={passData}
        income={income}
        expense={expense}
        //   delItem={delItem}
        sharedData={sharedData}
      />
    </div>
  );
};

export default MainPage;
