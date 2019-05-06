import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../Components/App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
	let wrapper;
	let mockEvent;
	let mockHandleClick;
	let mockCleanVehicle;
	let mockCleanVehcileData;

	beforeEach(() => {
		wrapper = shallow(<App />);
		mockEvent = { preventDefault: jest.fn() };
		mockHandleClick = jest.fn();
		mockFavoritesBtn = jest.fn();
		mockCleanVehicle = jest.fn();
		mockCleanVehicleData = {
			name: 'vehicle.name',
			model: 'vehicle.model',
			class: 'vehicle.vehicle_class',
			passengers: 'vehicle.passengers'
		};
	});

	it.only('renders without crashing', () => {
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
			favorites: [],
			error: ''
		});
	});

	it('should call handleClick and set state', async () => {
		wrapper.setState({ category: mockEvent.value });
		await wrapper.instance().handleClick(mockEvent);
		expect(mockHandleClick).toHaveBeenCalled();
	});

	it('should call favoritesBtn and set state', async () => {
		wrapper.setState({ category: mockEvent.value });
		await wrapper.instance().handleClick(mockEvent);
		expect(mockFavoritesBtn).toHaveBeenCalled();
	});

	it('should call cleanVehicle and set state', async () => {
		wrapper.setState({ category: mockEvent.value });
		await wrapper.instance().handleClick(mockEvent);
		expect(mockCleanVehicle).toHaveBeenCalledWith(mockCleanVehcileData);
	});
});

describe('HomeWorld', () => {
	let wrapper;
	let mockHomeWorld;

	beforeEach(() => {
		mockHomeWorld = {
			name: 'person.name',
			homeworld: 'homeworld.name',
			population: 200,
			species: 'person.species'
		};
	});

	it('should call fetchHomeWorld with the correct data when adding a new homeWorld ', async () => {
		const expected = [
			'swapit.co/api/people',
			{
				method: 'POST',
				body: JSON.stringify({
					homeworld: mockHomeWorld
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
		await expect(wrapper.state('error')).toEqual('Error fetching homeworld');
	});

	it('should return all promises', () => {});
});

describe('Species', () => {
	let wrapper;
	let mockSpecies;

	beforeEach(() => {
		mockSpecies = {
			name: 'person.name',
			homeworld: 'homeworld.name',
			population: 200,
			species: 'person.species'
		};
	});

	it('should call fetchSpecies with the correct data when adding a new species ', async () => {
		const expected = [
			'swapit.co/api/people',
			{
				method: 'POST',
				body: JSON.stringify({
					species: mockSpecies
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
		await expect(wrapper.state('error')).toEqual('Error fetching species');
	});

	it('should return all promises', () => {});
});

describe('Residents', () => {
	let wrapper;
	let mockResidents;

	beforeEach(() => {
		mockResidents = {
			name: 'planet.name',
			terrain: 'planet.terrain',
			population: 200,
			climate: 'planet.climate',
			residents: 'residents'
		};
	});

	it('should call fetchResidents with the correct data when adding a new residents ', async () => {
		const expected = [
			'swapit.co/api/planet',
			{
				method: 'POST',
				body: JSON.stringify({
					residents: mockResidents
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
		await expect(wrapper.state('error')).toEqual('Error fetching residents');
	});

	it('should return all promises', () => {});
});

describe('ResidentsName', () => {
	let wrapper;
	let mockResidentName;

	beforeEach(() => {
		mockResidentName = {
			resident: 'resident.name'
		};
	});

	it('should call fetchResidentName with the correct data when adding a new resident name ', async () => {
		const expected = [
			'swapit.co/api/planets',
			{
				method: 'POST',
				body: JSON.stringify({
					residentName: mockResidentName
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

	it('should return all promises', () => {});
});

describe('Results', () => {
	let wrapper;
	let mockFetchPeople;
	let mockFetchHomeworld;
	let mockFetchSpecies;
	let mockFetchResidents;
	let mockFetchVehicles;
	let mockCleanVehicles;
	let mockPeople;
	let mockPlanets;
	let mockVehicles;

	beforeEach(() => {
		mockCleanVehicles = jest.fn();
		mockFetchPeople = jest.fn();
		mockFetchHomeworld = jest.fn();
		mockFetchSpecies = jest.fn();
		mockFetchResidents = jest.fn();
		mockFetchVehicles = jest.fn();
		mockCleanVehicles = jest.fn();
		mockPeople = [
			{
				name: 'person.name',
				homeworld: 'homeworld.name',
				population: 200,
				species: 'person.species'
			}
		];
		mockPlanets = [
			{
				name: 'planet.name',
				terrain: 'planet.terrain',
				population: 200,
				climate: 'planet.climate',
				residents: 'residents'
			}
		];
		mockVehicles = [
			{
				name: 'vehicle.name',
				model: 'vehicle.model',
				class: 'vehicle.vehicle_class',
				passengers: 'vehicle.passengers'
			}
		];
	});

	it('should call fetchPeople ', async () => {
		await expect(mockFetchPeople).toHaveBeenCalled();
	});

	it('should call fetchHomeWorld ', async () => {
		await expect(mockFetchHomeworld).toHaveBeenCalled();
	});

	it('should call fetchSpecies ', async () => {
		await expect(mockFetchSpecies).toHaveBeenCalled();
	});

	it('sets the  state', async () => {
		await expect(wrapper.state('vehicles')).toEqual(mockPeople);
	});

	it('sets the error in state if the fetch fails', async () => {
		window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
		await expect(wrapper.state('people')).toEqual(mockPeople);
	});

	it('should call fetchPlanets ', async () => {
		await expect(mockFetchPlanets).toHaveBeenCalled();
	});

	it('should call fetchResidents ', async () => {
		await expect(mockFetchResidents).toHaveBeenCalled();
	});

	it('sets the  state', async () => {
		await expect(wrapper.state('vehicles')).toEqual(mockPlanets);
	});

	it('sets the error in state if the fetch fails', async () => {
		window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
		await expect(wrapper.state('planets')).toEqual(mockPlanets);
	});

	it('should call fetchVehicles ', async () => {
		await expect(mockFetchVehicles).toHaveBeenCalled();
	});

	it('should scall cleanVehicles ', () => {
		expect(mockCleanVehicles).toHaveBeenCalled();
	});

	it('sets the  state', async () => {
		await expect(wrapper.state('vehicles')).toEqual(mockVehicles);
	});

	it('sets the error in state if the fetch fails', async () => {
		window.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));
		await expect(wrapper.state('vehicles')).toEqual(mockVehicles);
	});
});
