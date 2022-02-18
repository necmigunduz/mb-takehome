// Index
import express from "express";

// Initialize app
let app = express();

// Setup server
let port = process.env.PORT || 4000;

// Send message for homepage of API
app.get('/', (req, res) => {
    res.send('This is the homepage for the Restful API for products');
});

// Listen to the port
app.listen(port, function(){
   console.log("Api is running on port: " + port)
});