import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test('should set default state', ()=> {

    const state = expenseReducer(undefined, {type: "@@INIT"});

    expect(state).toEqual([]);

});

test("should remove expense by ID", ()=>{

    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }

    const state = expenseReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]])

});




test("should not remove expense if id is not found", ()=> {

    const action = {
        type: "REMOVE_EXPENSE",
        id: "4"
    }

    const state = expenseReducer(expenses, action);

    expect(state).toEqual(expenses);

});

test("should add expense", ()=>{

    const newExpense = {
        id: "4",
        desciption: "car wash",
        note: "dirty car",
        amount: 400,
        createdAt: moment().add(4, 'days')
    }

    const action = {
        type: "ADD_EXPENSE",
        expense: newExpense
    }

    const state = expenseReducer(expenses, action);

    expect(state).toEqual([...expenses, newExpense]);


});


test("should edit an expense with valid id", ()=>{

    const text = 'coffee'

    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            text
        }
        
    }
   
    const state = expenseReducer(expenses, action);

    expect(state[1].text).toBe(text);



});

test("should not edit expense if id is not found", ()=>{

    const text = 'coffee'

    const action = {
        type: "EDIT_EXPENSE",
        id: "14",
        updates: {
            text
        }
        
    }
   
    const state = expenseReducer(expenses, action);

    expect(state).toEqual(expenses);



});



test('should set expenses', ()=>{
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[1]]);

    
})