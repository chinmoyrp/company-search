const express = require('express');
const cors = require('cors');
const handler = require('./handler');


const app = express();
const PORT = 8080;

app.use(cors())
app.use(express.json());

app.get('/companies', handler.getCompanies);
app.post('/companies', handler.addCompany);
app.post('/search', handler.searchCompany);

app.listen(
    PORT,
    () => console.log(`API is live on ${PORT}`)
);