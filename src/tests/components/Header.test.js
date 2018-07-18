import React from 'react';
import { shallow } from 'enzyme';
import Header from "../../components/Header";


test('should render Header correctly', ()=> {

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
    const wrapper = shallow(<Header />);

    expect(wrapper.find('NavLink')).toHaveLength((4));
    expect(wrapper).toMatchSnapshot();



});


