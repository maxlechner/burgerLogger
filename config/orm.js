// * Import (require) `connection.js` into `orm.js`
const connection = require("./connection");
var mysql = require("mysql");


module.exports = {

    selectAll() {
        return connection.query( "SELECT * FROM burgers");
    },

    insertOne() {
        return connection.query( "INSERT INTO burgers (burger_name, devoured) VALUES ?" );
    },

    updateOne() {
        return connection.query( "UDPATE burgers SET ? WHERE ?");
    },

}
