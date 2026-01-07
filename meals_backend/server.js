const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())
// use later to parse JSON bodies
app.use(express.json());