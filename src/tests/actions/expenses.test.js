import { addExpense, editExpense, removeExpense} from "../../actions/expenses";


test('should setup remove expense action object with provided values', ()=>{

    const action = removeExpense({id: "123abc"});

    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});


test('should setup edit expense action object with provided values', ()=>{
    const action = editExpense("abc213",{note: "I'm a new note", amount: 1500});
    
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "abc213",
        updates: {
            note: "I'm a new note",
            amount: 1500
        }

    });

})

test('should setup add expense action object with provided values', ()=>{

    const expenseData = {
        description: "rent",
        note: 'Jan',
        createdAt: 1000,
        amount: 109500
    }

    const action = addExpense(expenseData);


    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("should setup add expense action object with default values", ()=> {

    const action = addExpense();

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense:{
            id: expect.any(String),
            description: '',
            note: "",
            amount: 0,
            createdAt: undefined
        }   
    })
})