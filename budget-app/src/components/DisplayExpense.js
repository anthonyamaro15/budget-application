import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const DisplayExpense = ({ data }) => {
  let date = new Date().toLocaleDateString();

  return (
    <div className="item-list">
      <span className="item-value">{data.description}</span>
      <span className="date">{`created ${date}`}</span>
      <div className="del-container">
        <span className="actual-value-expense">+ {data.value}</span>
        <span className="icon">
          <TiDeleteOutline />
        </span>
      </div>
    </div>
  );
};

export default DisplayExpense;
