// https://swapi.dev/api/people

const axios = require('axios')

const url = 'https://swapi.dev/api/people/?search=Leia'

//fetch(reddit)
// .then(turn it in to json)
// .then(you get your data)

// axios.httpMehtod/Verb('url to make request to')
// axios.get(url)
// 	// axios returns a promise that is dot thennable
// 	.then(response => {
// 		// always need to get the data key 
// 		// axios puts the API's response in the data key
// 		// console.log(response.data.results) // what is in here?
// 		const princess = response.data.results.filter(result => result.name === 'Leia Organa')
// 		console.log(princess[0].homeworld)
// 		// another http request by returing an axios promise
// 		return axios.get(princess[0].homeworld)
// 	})
// 	.then(response => {
// 		console.log(response.data.films[0]) // princess Leia's homeworld data
// 		// get info about the first film this planet was in
// 		return axios.get(response.data.films[0])
// 	})
// 	.then(response => {
// 		console.log(response.data.opening_crawl) // film data
// 	})
// 	.catch(err => console.warn(err))

// BAD NO 
// axios.get(url) 	
// 	.then(response => {
// 		const princess = response.data.results.filter(result => result.name === 'Leia Organa')
// 		axios.get(princess[0].homeworld)
// 			.then(response => {
// 				axios.get(response.data.films[0])
// 					.then(response => {

// 					})
// 			})
// 	})

// async/await
// we can define an 'async function' which allows us to use the await keyword 
// to wait for promises to resolve
// try/catch is used for error handling

async function fetchStarwars() {
	// always write out your try/catch first
	try {
		// run this code like and if/else
		// put await in front of the thing you would usually dot then
		const response = await axios.get(url)
		// console.log(response.data)
		const princess = response.data.results.filter(result => result.name === 'Leia Organa')

		const homeworldResponse = await axios.get(princess[0].homeworld)
		console.log(homeworldResponse.data)
	} catch (err) {
		// run this code if the try has an error
		console.log(err)
	}
}

fetchStarwars() // don't forget to invoke!!

// bonus challenge -- refactor fetch calls to be async await 