import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import apiCalls from '../src/apiCalls';

describe('apiCalls', () => {
	let wrapper;

	it('should fetch people ', async () => {
		const expected = [
			'swapit.co/api/people',
			{
				method: 'POST',
				body: JSON.stringify({
					people: people
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		];

		await expect(window.fetch).toHaveBeenCalledWith(...expected);
	});

	it('sets the error in state if the fetch fails', async () => {
		window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
		await expect(wrapper.state('error')).toEqual('Error fetching resident names');
	});

	it('should call fetchResidentName with the correct data when adding a new resident name ', async () => {
		const expected = [
			'swapit.co/api/planets',
			{
				method: 'POST',
				body: JSON.stringify({
					planets: planets
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		];

		await expect(window.fetch).toHaveBeenCalledWith(...expected);
	});

	it('sets the error in state if the fetch fails', async () => {
		window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
		await expect(wrapper.state('error')).toEqual('Error fetching resident names');
	});

	it('should call fetchResidentName with the correct data when adding a new resident name ', async () => {
		const expected = [
			'swapit.co/api/planet',
			{
				method: 'POST',
				body: JSON.stringify({
					vehicles: vehiclea
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		];

		await expect(window.fetch).toHaveBeenCalledWith(...expected);
	});

	it('sets the error in state if the fetch fails', async () => {
		window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
		await expect(wrapper.state('error')).toEqual('Error fetching resident names');
	});
});
