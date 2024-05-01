//    Author: Dhairya Kachalia
//    ISU Netid : dhairyak
//    Date :  April 27, 2024

const mysql = require('mysql2/promise')
const db = mysql. createPool({
host: "127.0.0.1",
user: "root",
password: "",
database: "secoms319"
})

module.exports=db
