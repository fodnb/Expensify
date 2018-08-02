import React from 'react';
import { shallow } from 'enzyme';
import {Header} from "../../components/Header";
import {startLogout} from "../../actions/auth";



test('should render Header correctly', ()=> {

    const wrapper = shallow(<Header startLogout={()=>{}} />);

    expect(wrapper.find('Link')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();



});

test('should call startLogout on button click', ()=>{

    let startLogout = jest.fn();

    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();

})
