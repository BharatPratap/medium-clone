
const article = require('./article')
const home = require('./home')
const user = require('./user')

module.exports = (router) => {
    home(router);
    // user(router);
    // article(router);
}