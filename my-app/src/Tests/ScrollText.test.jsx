import React from 'react';
import { shallow } from 'enzyme';
import ScrollText from '../Components/ScrollText';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ScrollText', () => {
	let wrapper;
	let mockFilm;

	beforeEach(() => {
		wrapper = shallow(<ScrollText />);
		mockFilm = {
			name: 'film',
			opening_crawl: 'opening crawl'
		}
	});

	window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
		json: () => Promise.resolve(mockFilm)
	}))

	it('should mock snapshot', async () => {
		await expect(wrapper).toMatchSnapshot();
	});

	it('should have default state', async () => {
		await expect(wrapper.state()).toEqual({
			film: {}
		});
	});

	it('calls fetch with the correct data', async () => {
		const url = 'swapi.co/api/films'
		const options = {
		method: 'POST',
		body: JSON.stringify({ film: mockFilm}),
		headers: {
			'Content-Type': 'application/json'
		}
		}

 	 	wrapper.setState({film: mockFilm})
  	await expect(window.fetch).toHaveBeenCalledWith(url, options)
  });

  it('sets the error in state if the fetch fails', async () => {
			window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(
				new Error('Fetch failed')
			)
				await expect(wrapper.state('errorStatus')).toEqual('Error adding grocery')
			})
	})
  });

});
