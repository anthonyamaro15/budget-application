import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const DisplayIncome = ({ data, delItem }) => {
  let date = new Date().toLocaleDateString();

  return (
    <div className="item-list">
      <span className="item-value">{data.description}</span>
      <span className="date">{`created ${date}`}</span>
      <div className="del-container">
        <span className="actual-value-income">+ {data.value}</span>
        <span className="icon" onClick={delItem}>
          <TiDeleteOutline />
        </span>
      </div>
    </div>
  );
};

export default DisplayIncome;
