import React from "react";
import "./ExpenseSpreadSheet.css"
// import { useState } from 'react'
import { Grid, Input} from 'react-spreadsheet-grid'

const ExpenseSpreadSheet = () => {

  const expenses = [
    {category_id: 'category1', description: 'Pho', amount: 31 },
    {category_id: 'category2', description: 'Thai food', amount: 40},
    {category_id: 'category2', description: 'Thai food', amount: 40},
    {category_id: 'category2', description: 'Thai food', amount: 40},
    {category_id: 'category2', description: 'Thai food', amount: 40},
    {category_id: 'category2', description: 'Thai food', amount: 40},
    {category_id: 'category2', description: 'Thai food', amount: 40},
    {category_id: 'category2', description: 'Thai food', amount: 40},
    {category_id: 'category2', description: 'Thai food', amount: 40}
    // and so on...
];
  return(
    <div id="gridsheet">
      {/* Bootstrap spreadsheet/table making */}
      <Grid isScrollable
      columns={[
        {
          title: () => 'Description',
          value: (expense, { focus }) => {
              return (
                  <Input
                    value={expense.description}
                    focus={focus}
                    // onChange={}
                  />
              );
          }
        }, {
          title: () => 'Amount',
          value: (expense, { focus }) => {
              return (
                <Input
                value={expense.amount}
                focus={focus}
              />
              );
          }
        }
      ]}
      rows={expenses}
      getRowKey={expense => expense.category_id}
    />
    </div>);
}

export default ExpenseSpreadSheet;





