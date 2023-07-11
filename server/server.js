const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const stripe = require('./routes/stripe')

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

app.use("/api/stripe", stripe);

const PORT = 5000;
app.listen(PORT, () =>
    console.log(`Server running at port: ${PORT}`)
)