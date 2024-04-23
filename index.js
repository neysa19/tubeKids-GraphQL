const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const secretKey = 'mysecretkey';
const { graphqlHTTP } = require("express-graphql");
const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL;


const mongoose = require('mongoose');

mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(cors());

const { schemaGraphQL } = require("./schema/schemaGraphQL.js");
