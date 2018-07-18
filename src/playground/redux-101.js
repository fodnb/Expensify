import { createStore } from 'redux';


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const reset = ({} = {}) => ({
    type: "RESET",
});

const setCount = ({ count } = {}) => ({
    type: "SETCOUNT",
    count
});

const countReducer = (state = { count: 0, eggs: 5 }, action)=>{

    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy    
            }
        case "RESET":
            return {
                count: 0
            };
        case "SETCOUNT":
            return {
                count: action.count
            }
        default: 
            return state
    }

};

const store = createStore(countReducer);


// Actions = an object that gets sent to the store

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 5}));



store.dispatch(reset());

store.dispatch(decrementCount({decrementBy: 10
}));

store.dispatch(decrementCount()); 
store.dispatch(setCount({count: 101}));
console.log(store.getState());



// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// }



// const {name: publisherName = "Self published"} = book.publisher;


// console.log(publisherName);

// const item = ["Coffee (Hot)", "$2.00", "2.50", "2.75"];

// const [beverage, ,medium] = item;

// console.log(`A medium ${beverage} costs ${medium}`);

