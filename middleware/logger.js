const moment = require('moment');
// req.protocol - http
// req.get('host') - localhost
// req.originalUrl - /api/members

// Middleware function
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

module.exports = logger;