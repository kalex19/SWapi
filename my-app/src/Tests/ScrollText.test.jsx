import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import ScrollText from '../src/ScrollText';

describe('ScrollText', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ScrollText />);
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should have default state', () => {
		expect(wrapper.state()).toEqual({
			film: {}
		});
	});

	it('', () => {});
});
