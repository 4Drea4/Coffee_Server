const express = require('express'); //import express
const path = require('path'); //import path
const app = express(); //create an instance
const port = 3000; //set the port

//middleware that tells  Express to use the 'express.static' middleware to serve all files from the 'public' directory.
app.use(express.static(path.join(__dirname,'public')));
// Create a route handler for GET requests to the root URL (/). When this route is requested, it should send the index.html file from your public directory.
app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Create another route handler for GET requests to /contact. This should send the contact.html file.
app.get('/contact', (req,res)=> {
    res.sendFile(path.join (__dirname, 'public', 'contact.html'));
})
// Start the server and have it listen on your chosen port. When it starts, it should log a message to the console, like Server is running on port 3000.
app.listen(port, () => {
    console.log(`Coffee grinding on port ${port}`)
})