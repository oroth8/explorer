// A template for the backend portion was provided to the class by Paul Cwik in order to facilitate an easier deployment to heroku and github.

// Dependencies
const express = require('express');
const routes = require('./routes');

// Express instance
const app = express();

// Variable Port
const PORT = process.env.PORT || 9001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// If our node environment is production we will serve up our static assets from the build folder
if (process.env.NODE_ENV === 'production') {
    // The react app is called 'client' and we are accessing the build folder that is initialized in the postbuild scripts.
    app.use(express.static('client/build'))
};

// API and View Routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server listening at http://localhost:${PORT}`)
    };
});