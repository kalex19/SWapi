import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import ErrorMessage from '../src/ErrorMessage';

describe('ErrorMessage', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ErrorMessage />);
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
