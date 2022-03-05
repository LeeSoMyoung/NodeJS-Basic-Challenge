'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

//app.use('/css', express.static(path.resolve(__dirname, 'public', 'css')));
//app.use('/routes', express.static(path.resolve(__dirname, 'public', 'routes')));
//app.use('/views', express.static(path.resolve(__dirname, 'public', 'views')));
app.use(express.static(process.cwd() + '/public'));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});