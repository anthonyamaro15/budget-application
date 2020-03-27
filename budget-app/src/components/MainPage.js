import React from "react";
import { connect } from "react-redux";
import { addData, delItem } from "../actions/index";
import Navbar from "./Navbar";
import Content from "./Content";

const MainPage = ({ data, addData, delItem }) => {
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

const mapStateProps = ({ dataReducer }) => {
  return {
    data: dataReducer.data
  };
};

export default connect(mapStateProps, { delItem, addData })(MainPage);
