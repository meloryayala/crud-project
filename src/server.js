const express = require('express')
const path = require('path')


const db = require('./database')
const routes = require('./routes')


const app = express()

//Connecting the database
db.connect()

//Defining the engine template
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Defining public files
app.use(express.static(path.join(__dirname, 'public')))

//Able the server to receive data via post (form)
app.use(express.urlencoded({ extended: true }))

//Defining the routes
app.use('/', routes)

//404 error (not found)
app.use((req, res) => {
    res.send('Page not found!')
})

//Server execution
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))