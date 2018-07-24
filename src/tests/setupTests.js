import Enzyme from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
    adapter: new Adapter()
});


import Dotenv from 'dotenv';
Dotenv.config({
    path: '.env.test'
}); 






