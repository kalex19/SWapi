import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

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
