const express = require('express'); //import express
const app = express(); //create an instance
const port = 3000; //set the port

//middleware that tells  Express to use the 'express.static' middleware to serve all files from the 'public' directory.
app.arguments(express.static(path.join(__dirname,'public')))

// Create a route handler for GET requests to the root URL (/). When this route is requested, it should send the index.html file from your public directory.
app.get('/', (req,res)=> {
    res.sent
})



// Create another route handler for GET requests to /contact. This should send the contact.html file.
app.get('/contact', (req,res)=> {
    res.sent
})
// Start the server and have it listen on your chosen port. When it starts, it should log a message to the console, like Server is running on port 3000.
app.listen(port, () => {
    console.log(`Coffee grinding on port ${port}`)
})