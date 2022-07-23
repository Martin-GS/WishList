require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRouter = require('./app/router');

const app = express();

const PORT = process.env.PORT || 5555;

app.use(cors());
app.use(express.json());
app.use('/', apiRouter);

const session = require('express-session');

app.use(session({
    secret: "jzeofjjfjijggGDhfghFGDFGqEPG",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 10006060,
        secure: false
    }
}));

app.use('/', apiRouter);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


