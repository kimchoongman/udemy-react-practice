import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import styled from "styled-components";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpense = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <StyledDiv>
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList lists={filterExpense} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

export default Expenses;
