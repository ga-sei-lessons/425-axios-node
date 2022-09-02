// console.log('i am the main entry point, you can run me by typing "node ."')
// packages
const express = require('express')
const axios = require('axios')

// app config
const app = express()
app.set('view engine', 'ejs')
const PORT = 3000

// routes
// GET / -- render a form that lets the user search SWAPI
app.get('/', (req, res) => {
	res.render('index.ejs')
})

// GET /search -- take a search from the user and render the results for them to see
// using dot then syntax
app.get('/search', (req, res) => {
	console.log(req.query.userInput) // express puts the query strings here
	const searchUrl = `https://swapi.dev/api/people/?search=${req.query.userInput}`
	axios.get(searchUrl)
		.then(response => {
			// render the temple once the API gets back to us
			res.render('results.ejs', {
				people: response.data.results,
				input: req.query.userInput
			})	
		})
		.catch(console.log) // HANDLE YOUR ERRORS
})

// async/await
app.get('/search', async (req, res) => {
	try {
		// route logic here
		const searchUrl = `https://swapi.dev/api/people/?search=${req.query.userInput}`
		const response = await axios.get(searchUrl)

		res.render('results.ejs', {
			people: response.data.results,
			input: req.query.userInput
		})			
	} catch (err) {
		// error handling logic here
		console.log(err)
	}
})

// GET /search/homeworld -- search the url from the query params and render a template
app.get('/search/homeworld', (req, res) => {
	// console.log(req.query.url)
	axios.get(req.query.url)
		.then(response => {
			// console.log(response.data)
			res.render('homeworld.ejs', { world: response.data })
		})
		.catch(err => {
			console.log('🔥🔥🔥🔥🔥', err)
		})
})

// listen for incoming connections
app.listen(PORT, () => {
	console.log(`rrrrraaawwwawawaarrrgghggh ${PORT}`)
})
