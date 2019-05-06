import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Header from '../src/Header';

describe('Header', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Header />);
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('', () => {});

	it('', () => {});
});
