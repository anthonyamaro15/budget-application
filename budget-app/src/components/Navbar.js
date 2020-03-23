import React from "react";

const Navbar = ({
  avalibleNow,
  getTotalIncome,
  getTotalExpense,
  dateCreated
}) => {
  return (
    <header>
      <div className="header-container">
        <span className="avalible">{`avalible budget in ${dateCreated}`}</span>
        <span className="show-total">{avalibleNow}</span>
        <div className="shared income">
          <span>income</span>
          <span>+ {getTotalIncome}</span>
        </div>
        <div className="shared expense">
          <span>expenses</span>
          <span>- {getTotalExpense}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
