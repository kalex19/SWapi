// export const Homeworld = homeworld => {
//   return fetch('https://swapi.co/api/planets' {
//       method: 'POST',
//       body: JSON.stringify({}),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw Error('Error adding homeworld')
//       } else {
//         return response.json()
//       }
//     })
// }


export const film = film => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ film }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {if(!response.ok){
    throw Error('Error getting film')
  } else {
    return response.json()
  }
});

fetch('https://swapi.co/api/planets')
fetch('https://swapi.co/api/people')
fetch('https://swapi.co/api/vehicles')
fetch('https://swapi.co/api/film')
fetch('https://swapi.co/api/species') //dynamic
fetch('https://swapi.co/api/planets') //dynamic for homeworld
fetch('https://swapi.co/api/planets') //dynamic for homeworld population
fetch('https://swapi.co/api/planets') //dynamic for residents

