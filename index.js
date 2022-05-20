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
})

// listen for incoming connections
app.listen(PORT, () => {
	console.log(`rrrrraaawwwawawaarrrgghggh ${PORT}`)
})