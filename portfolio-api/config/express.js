const config = require('../config/config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    app.use((req, res, next) => {
        if (req.cookies) {
            res.locals.isLoggedIn = req.cookies[config.cookie] !== 'undefined';
        }
        if (req.user) {
            res.locals.username = req.user;
            console.log(req.user);
        }
        next();
    });

    app.use((err, req, res, next) => {
        console.error(err)
        res.status(500)
            .send(`Server Error!`)
    })

    app.use(function (req, res, next) {
        const allowedDomains = ['http://localhost:3000', 'https://plamen-dimitrov.eu'];
        const origin = req.headers.origin;
        if (allowedDomains.indexOf(origin) > -1) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Credentials", true); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "PUT, DELETE");
        next();
    });

    app.use(cookieParser());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())
};