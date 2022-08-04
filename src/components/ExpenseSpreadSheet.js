import React from "react";
import "./ExpenseSpreadSheet.css"
import { Grid, Input} from 'react-spreadsheet-grid'

const ExpenseSpreadSheet = (props) => {

  const emptyExpenses = [
    {category_id: 'category1', description: '', amount: '' },
];

  const thisCategory_id = props.defcategory_id;
  // const expenses = props.expenses; 
  //this is all expenses for specific month and year
  //need to render depend on category : using filter?
  const thisExpenses = props.expenses.filter((expense) => 
    expense.category_id === thisCategory_id
  );
  console.log(thisExpenses);
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
                // onclick={togglePopup}
              />
              );
          }
        }
      ]}
      rows={expenseDatas}
      getRowKey={expenseData => expenseData.category_id}
    />

    </div>);
}

export default ExpenseSpreadSheet;





