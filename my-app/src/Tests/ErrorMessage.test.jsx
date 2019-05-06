import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import ErrorMessage from '../Components/ErrorMessage';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ErrorMessage', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ErrorMessage />);
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
