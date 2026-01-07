const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())
// use lat
app.use(express.json());

// sample meals, will pull from other apis later or will make a larger database.
const meals = [
    {
        id: "1", 
        title: "Garlic Butter Pasta",
        ingredients: ["Noodles", "Garlic", "Butter" ]
    },
        {

        id: "2", 
        title: "Pasta",
        ingredients: ["Noodles" ]
    },
        {

        id: "3", 
        title: "Pasta",
        ingredients: ["Noodles" ]
    },
]