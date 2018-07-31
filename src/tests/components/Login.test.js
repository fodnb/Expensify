import React from 'react';
import {shallow} from 'enzyme';
import {Login} from "../../components/Login";
import {startLogout} from "../../actions/auth";


test('should display login button', ()=>{
    const wrapper = shallow(<Login startLogin={()=>{}}/>);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();


});

test('should call startLogin on button click', ()=>{
    let startLogin = jest.fn();

    const wrapper = shallow(<Login startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
    
})