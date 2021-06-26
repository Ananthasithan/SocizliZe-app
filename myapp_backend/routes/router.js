const express = require("express");
const router = express.Router();
const connection = require("../utilities/connection");

var userModel;

let getCollection = async() => {
    try {
        userModel = await connection.getUserCollection();
        console.log("Succesfully connected to db");
    } catch (err) {
        console.log(err);
    }
}

let insertData = async() => {
    try {
        console.log(userModel);
        let returned = await userModel.create({userName: "Anand", emailId:"abc@123.com", password: "password"});
        console.log(returned)
    }
    catch (err){
        console.log(err);
    }
}
router.post("/home",(req,res) => {
    insertData();
});

getCollection();
module.exports = router;