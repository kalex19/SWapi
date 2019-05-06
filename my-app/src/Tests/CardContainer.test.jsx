import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CardContainer from '../Components/CardContainer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
