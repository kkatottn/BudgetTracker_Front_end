import React from "react";
import "./ExpenseSpreadSheet.css"
import { Grid, Input} from 'react-spreadsheet-grid'

const ExpenseSpreadSheet = (props) => {

  const emptyExpenses = [
    {category_id: 'category1', description: '', amount: '' },
];

  const thisCategory_id = props.category_id;
  const thisExpenses = props.expenses.filter((expense) => 
    expense.category_id === thisCategory_id
  );

  let expenseDatas = null;
  if (thisExpenses.length === 0){
    expenseDatas = emptyExpenses
  }
  else{
    expenseDatas = thisExpenses
  };

  return(
    <div id="gridsheet">
      {/* Bootstrap spreadsheet/table making */}
      <Grid isScrollable
      columns={[
        {
          title: () => 'Description',
          value: (expenseDatas, { focus }) => {
              return (
                  <Input
                    value={expenseDatas.description}
                    focus={focus}
                  />
              );
          }
        }, {
          title: () => 'Amount',
          value: (expenseDatas, { focus }) => {
              return (
                <Input
                value={expenseDatas.amount}
                focus={focus}
              />
              );
          }
        }
      ]}
      rows={expenseDatas}
      getRowKey={expenseData => expenseData.expense_id}
    />

    </div>);
}

export default ExpenseSpreadSheet;





