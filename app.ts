import express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<p>Hello, CDK!<p>');
});

app.listen(80, err => {
    if (err) {
        return console.error(err);
    }
});