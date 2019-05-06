import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CardContainer from '../src/CardContainer';

describe('CardContainer', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CardContainer />);
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('', () => {});

	it('', () => {});
});
