import React from "react";
import {shallow} from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from "../fixtures/expenses";


test('should render expenselist with expense', ()=> {

    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render no expense p element with no expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]} />);

    expect(wrapper).toMatchSnapshot();

})
