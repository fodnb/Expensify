import React from "react";
import { shallow } from 'enzyme';
import {EditExpensePage} from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";


let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach (()=> {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {
        push: jest.fn()
    }
    wrapper = shallow(
                        <EditExpensePage 
                        history={history} 
                        startEditExpense={startEditExpense} 
                        startRemoveExpense={startRemoveExpense}
                        expense={expenses[2]}
                        />)
});


test('should render edit expense page correctly',()=> {

    expect(wrapper).toMatchSnapshot();

});

test('should handle on submit correctly', ()=>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})

test('should handle on remove correctly', ()=>{
    wrapper.find('button').simulate("click");
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[2].id})
})