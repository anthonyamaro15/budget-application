import React from "react";
import MainForm from "./MainForm";
import DisplayIncome from "./DisplayIncome";
import DisplayExpense from "./DisplayExpense";

const Content = ({ income, expense, delItem, addData }) => {
  const displayIn = income.map(item => (
    <DisplayIncome key={item.id} data={item} delItem={() => delItem(item)} />
  ));
  const displayEx = expense.map(item => (
    <DisplayExpense key={item.id} data={item} delItem={() => delItem(item)} />
  ));
  return (
    <section className="section-container">
      <MainForm addData={addData} />
      <div className="display-information">
        <div className="display-income in-ex">
          <h3 className="in">income</h3>
          {displayIn}
        </div>
        <div className="display-expense in-ex">
          <h3 className="ex">expense</h3>
          {displayEx}
        </div>
      </div>
    </section>
  );
};

export default Content;
