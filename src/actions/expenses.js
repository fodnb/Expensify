import uuid from "uuid";
import database from "../../src/firebase/firebase";
//components call action generator
//action generator returns object
//component calls action generator dispatches function
// function runs (has the ability to dispatch other and do whatever it wants)


export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
})

// REMOVE EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id 
});

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch)=>{
        const {
            description = "",
            note = '',
            createdAt = 0,
            amount = 0
        } = expenseData;

        const expense = { description, note, createdAt, amount};

       return database.ref('expenses').push(expense)
            .then((snapshot)=>{
                dispatch(addExpense({
                    id: snapshot.key,
                    ...expense
                }))
            });


    }
}