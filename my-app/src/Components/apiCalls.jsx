export const fetchPeople = people => {
	const url = `https://swapi.co/api/people`;
	return fetch(url).then(response => response.json()).catch(error => console.log(error));
};

export const fetchPlanets = planets => {
	const url = `https://swapi.co/api/planets`;
	return fetch(url).then(response => response.json()).catch(error => console.log(error));
};

export const fetchVehicles = vehicles => {
	const url = `https://swapi.co/api/vehicles`;
	return fetch(url).then(response => response.json()).catch(error => console.log(error));
};
