
module.exports = async (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
}
