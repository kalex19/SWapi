import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Controls from './Controls';
import CardContainer from './CardContainer';
import { fetchPeople } from './apiCalls';
import { fetchPlanets } from './apiCalls';
import { fetchVehicles } from './apiCalls';

export default class App extends Component {
	state = {
		category: null,
		people: [],
		planets: [],
		vehicles: [],
		favoriteCount: 0,
		favorites: []
	};

	handleClick = e => {
		this.setState({ category: e.target.name }, () => {
			this.fetchResults();
		});
	};

	fetchHomeworld = people => {
		let unresolved = people.map(person => {
			return fetch(person.homeworld)
				.then(response => response.json())
				.then(homeworld => ({
					name: person.name,
					homeworld: homeworld.name,
					population: homeworld.population,
					species: person.species
				}))
				.catch(error => console.log(error));
		});
		return Promise.all(unresolved);
	};

	fetchSpecies = persons => {
		let unresolved = persons.map(person => {
			return fetch(person.species)
				.then(response => response.json())
				.then(species => ({ ...person, species: species.name }))
				.catch(error => console.log(error));
		});
		return Promise.all(unresolved);
	};

	fetchResidents = planets => {
		let unresolved = planets.map(planet => {
			return this.fetchResidentName(planet.residents)
				.then(residents => ({
					name: planet.name,
					terrain: planet.terrain,
					population: planet.population,
					climate: planet.climate,
					residents: residents.join(', ')
				}))
				.catch(error => console.log(error));
		});
		return Promise.all(unresolved);
	};

	fetchResidentName = residents => {
		let unresolved = residents.map(resident => {
			return fetch(resident)
				.then(response => response.json())
				.then(resident => resident.name)
				.catch(error => console.log.log(error));
		});
		return Promise.all(unresolved);
	};

	cleanVehicles = vehicles => {
		let unresolved = vehicles.map(vehicle => ({
			name: vehicle.name,
			model: vehicle.model,
			class: vehicle.vehicle_class,
			passengers: vehicle.passengers
		}));
		return unresolved;
	};

	fetchResults = () => {
		const { category } = this.state;
		if (category === 'people') {
			fetchPeople()
				.then(response => this.fetchHomeworld(response.results))
				.then(response => this.fetchSpecies(response))
				.then(people => this.setState({ people }));
		}
		if (category === 'planets') {
			fetchPlanets()
				.then(response => this.fetchResidents(response.results))
				.then(planets => this.setState({ planets }));
		}
		if (category === 'vehicles') {
			fetchVehicles()
				.then(response => this.cleanVehicles(response.results))
				.then(vehicles => this.setState({ vehicles }));
		}
	};

	favoritesBtn = () => {
		this.setState = {
			favoriteCount: this.state.favoriteCount + 1
		};
	};

	//local storage

	render() {
		return (
			<div className="App">
				<Header favoriteCount={this.state.favoriteCount} />
				<Controls handleClick={this.handleClick} />
				<CardContainer
					results={this.state.results}
					category={this.state.category}
					count={this.state.favoriteCount}
					people={this.state.people}
					planets={this.state.planets}
					vehicles={this.state.vehicles}
				/>
			</div>
		);
	}
}
