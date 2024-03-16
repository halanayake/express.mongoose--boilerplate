require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI).then(
    () => {
        console.log("Database OK");
    }).catch(
    error => {
        console.error("Database ERROR ", error);
    }
);


const useRoutes = require('./app/routes/user-route');

const PORT = process.env.PORT;

app.use(express.json());

// Backend Routes
app.use('/user', useRoutes);

app.listen(PORT, (error) => {
        if (!error) {
            console.log("Server OK | Port - " + PORT)
        } else {
            console.error("Server initialization error ", error);
        }
    }
);
