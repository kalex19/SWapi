import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Card from '../Components/Card';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Card', () => {
	let wrapper;
	let mockEvent;
	let mockHandleClick;

	beforeEach(() => {
		wrapper = shallow(<Card />);
		mockEvent(() => {
			preventDefault: jest.fn();
		});
		mockHandleClick = jest.fn();
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call handleClick', async () => {
		await wrapper.instance().tohandleClick(mockEvent);
		expect(mockHandleClick).toHaveBeenCalled();
	});

	it('', () => {});
});
