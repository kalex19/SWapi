import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import apiCalls from '../src/apiCalls';

describe('apiCalls', () => {
	it('should ', () => {});

	it('', () => {});

	it('', () => {});
});

//should call fetch film with correct parameters
//should call fetch results with correct parameters
//should call fetch homeworld with correct parameters
//should call fetch species with correct parameters
//should call fetch pop of hw with correct parameters
//should call fetch residents with correct parameters

//should set error in state if did not fetch -- need to declare something in state to take message (errorStatus: '') -- might need this for each fetch?
describe('App', () => {
	let wrapper;
	let mockEvent;
	let mockHandleClick;

	beforeEach(() => {
		wrapper = shallow(() => {
			<App />;
		});
		mockEvent = { preventDefault: jest.fn() };
		mockHandleClick = jest.fn();
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should mock snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should have default state', () => {
		expect(wrapper.state()).toEqual({
			category: null,
			results: [],
			favortiesCount: 0,
			favorites: []
		});
	});

	it('should call handleClick and set state', async () => {
		wrapper.setState({ category: mockEvent.value });
		await wrapper.instance().handleClick(mockEvent);
		expect(mockHandleClick).toHaveBeenCalled();
	});
});
