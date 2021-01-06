const orm = require(".././config/orm");
// var inquirer = require("inquirer");
const connection = require(".././config/connection")



// Build out functionality for testing functions

orm.selectAll().then((results) => {
    console.table(results)
})

module.exports = burger;
