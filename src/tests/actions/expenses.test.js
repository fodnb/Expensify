import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { startSetExpenses, setExpenses, startAddExpense, addExpense, editExpense, removeExpense} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);



beforeEach((done)=>{
    const expenseData = {};

    expenses.forEach(({id, note, description, amount, createdAt})=>{
        expenseData[id] = {id, note, description, amount, createdAt}
    });

    database.ref('expenses').set(expenseData).then(()=>done());
})


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
    })
});

test('should setup add expense action object with provided values', ()=>{
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})

test('should add a new expense to the database and store', (done)=>{
    const store = createMockStore({});
    
    const expenseData = { 
        description: 'mouse', 
        amount: 3000, 
        note: 'this one is better', 
        createdAt: 1000
    }
    
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();// returns array of all actions
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        
            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot)=> {
             expect(snapshot.val()).toEqual(expenseData);
            done();
});
});

test('should add expense with defaults to database and store', (done)=>{
    const store = createMockStore({});
    
    const expenseData = { 
        description: '', 
        amount: 0, 
        note: '', 
        createdAt: 0
    }
    
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();// returns array of all actions
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        
            return database.ref(`expenses/${actions[0].expense.id}`).once('value');

        }).then((snapshot)=> {
             expect(snapshot.val()).toEqual(expenseData);
            done();
});


});

test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    });

})

test('should fetch expenses from firebase', ()=>{

    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then((done)=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });

        done();
    });

})