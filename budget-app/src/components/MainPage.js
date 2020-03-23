import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

const MainPage = () => {
  const [data, setData] = useState([]);
  const income = data.filter(inc => inc.options === "income");
  const expense = data.filter(ex => ex.options === "expense");

  const passData = arr => {
    setData(arr);
  };

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

  const delItem = id => {
    const del = data.filter(item => item.id !== id);
    console.log(del);
    setData(del);
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
        passData={passData}
        income={income}
        expense={expense}
        delItem={delItem}
      />
    </div>
  );
};

export default MainPage;
