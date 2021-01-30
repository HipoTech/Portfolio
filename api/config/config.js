const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 80,
        dbURL: 'mongodb://localhost:27017/',
        cookie: 'ecom-auth-token'
    },
    production: {}
};

module.exports = config[env];