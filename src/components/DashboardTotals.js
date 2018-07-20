// import selectExpensesTotals from '../selectors/expenses-total.js';


// const expenses = [{
//     id: "1",
//     description: "gum",
//     note: '',
//     amount: 195
// },
// {
//     id: "2",
//     description: "rent",
//     note: '',
//     amount: 170000.00
// },
// {
//     id: "3",
//     description: "credit card",
//     note: '',
//     amount: 4000
// }    
// ]

export default(expenses) =>{

const getExpenseTotal = (expenses) =>{
    expenseTotal = expenses.map((expense)=> {
        return totalsArray.push(expense.amount);
    })
    total = totalsArray.reduce((prev, cur)=> {
        return total = prev + cur;
    })
    
    return total
}

let totalsArray = [], total, expenseTotal;

{expenses[0].amount ? getExpenseTotal(expenses) : total = 0}

return total;

}