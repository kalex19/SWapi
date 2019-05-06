import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Controls from '../Components/Controls';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
