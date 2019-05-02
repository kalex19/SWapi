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
				.then(homeworld => ({ name: person.name, homeworld: homeworld.name, population: homeworld.population }))
				.catch(error => 'error in fetching homeworld');
		});
		return Promise.all(unresolved);
	};

	fetchSpecies = people => {
		let unresolved = people.map(person => {
			return fetch(person.species)
				.then(response => response.json())
				.then(species => ({ ...person, species: species.name }))
				.catch(error => 'error in fetching species');
		});
		return Promise.all(unresolved);
	};

	fetchResidents = planets => {
		let unresolved = planets.map(planet => {
			return fetch(planets.residents)
				.then(response => response.json())
				.then(residents => ({
					name: planet.name,
					terrain: planet.terrain,
					population: planet.population,
					climate: planet.climate,
					residents: residents.resident
				}))
				.catch(error => 'error in fetching residents');
		});
		return Promise.all(unresolved);
	};

	fetchResults() {
		if (this.state.category === 'people') {
			fetchPeople()
				.then(response => this.fetchHomeworld(response.results))
				.then(people => this.fetchSpecies(people))
				.then(people => this.setState({ people }));
		}
		if (this.state.category === 'planets') {
			fetchPlanets().then(results => this.fetchResidents(results.results)).then(planets => this.setState({ planets }));
		}
		if (this.state.category === 'vehicles') {
			fetchVehicles().then(results => this.setState({ vehicles: results.results }));
		}
	}

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
