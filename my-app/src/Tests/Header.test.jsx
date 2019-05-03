import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Header from '../Components/Header';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
