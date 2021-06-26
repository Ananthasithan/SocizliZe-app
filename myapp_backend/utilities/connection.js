const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const userSchema = require("./userSchema");
const userSchemaObject = new mongoose.Schema(userSchema,{collection:"User", timestamps: true});
require("dotenv").config()
const url = process.env.MONGO_URL;

let connection = {}

connection.getUserCollection = async() => {
    try {
        let userCollection = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        return userCollection.model("User", userSchemaObject);
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

module.exports = connection