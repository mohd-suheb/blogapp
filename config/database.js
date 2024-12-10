const mongoose = require('mongoose');
require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connection successful");
    })
    .catch((error) => {
        console.error("DB connection facing an issue");
        console.error(error);
        process.exit(1);
    });
};

module.exports = dbconnect;
