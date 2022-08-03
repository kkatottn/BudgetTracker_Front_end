import React from "react";
import "./ExpenseSpreadSheet.css"
import { Grid, Input} from 'react-spreadsheet-grid'

const ExpenseSpreadSheet = () => {

  const emptyExpenses = [
    {category_id: 'category1', description: '', amount: '' },
    // {category_id: 'category2', description: '', amount: '' },
    // {category_id: 'category3', description: '', amount: '' },
    // {category_id: 'category4', description: '', amount: '' },
    // {category_id: 'category5', description: '', amount: '' },
    // {category_id: 'category6', description: '', amount: '' },
    // {category_id: 'category7', description: '', amount: '' },
    // {category_id: 'category8', description: '', amount: '' },
    // {category_id: 'category9', description: '', amount: '' },
    // {category_id: 'category10', description: '', amount: '' },
];

  return(
    <div id="gridsheet">
      {/* Bootstrap spreadsheet/table making */}
      <Grid isScrollable
      columns={[
        {
          title: () => 'Description',
          value: (emptyExpense, { focus }) => {
              return (
                  <Input
                    value={emptyExpense.description}
                    focus={focus}
                  />
              );
          }
        }, {
          title: () => 'Amount',
          value: (emptyExpense, { focus }) => {
              return (
                <Input
                value={emptyExpense.amount}
                focus={focus}
                // onclick={togglePopup}
              />
              );
          }
        }
      ]}
      rows={emptyExpenses}
      getRowKey={emptyExpense => emptyExpense.category_id}
    />

    </div>);
}

export default ExpenseSpreadSheet;





