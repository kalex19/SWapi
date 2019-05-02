import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Controls from '../src/Controls';

describe('Controls', () => {
	let wrapper;
	let mockEvent;
	let mockHandleClick;

	beforeEach(() => {
		wrapper = shallow(<Controls handleClick={mockHandleClick} />);
		mockEvent = { preventDefault: jest.fn() };
		mockHandleClick = jest.fn();
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call handleClick', async () => {
		await wrapper.instance().handleClick(mockEvent);
		expect(mockHandleClick).toHaveBeenCalled();
	});
});
