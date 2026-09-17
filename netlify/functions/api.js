const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Set views path relative to function location
app.set('views', path.join(__dirname, '../../views'));
app.set('view engine', 'ejs');

// Serve static assets
app.use(express.static(path.join(__dirname, '../../public')));

// Routes
app.get('/', (req, res) => res.render('home'));
app.get('/project-concepts', (req, res) => res.render('project-concepts'));
app.get('/features', (req, res) => res.render('features'));
app.get('/contributors', (req, res) => res.render('contributors'));
app.get('/contact', (req, res) => res.render('contact'));

module.exports.handler = serverless(app);