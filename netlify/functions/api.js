const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, '../../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../../public')));

// Core & Existing Routes
app.get('/', (req, res) => res.render('home'));
app.get('/project-concepts', (req, res) => res.render('project-concepts'));
app.get('/features', (req, res) => res.render('features'));
app.get('/contributors', (req, res) => res.render('contributors'));
app.get('/contact', (req, res) => res.render('contact'));

// New Chapter Routes
app.get('/chapter-1', (req, res) => res.render('chapter-1'));
app.get('/chapter-2', (req, res) => res.render('chapter-2'));
app.get('/chapter-3', (req, res) => res.render('chapter-3'));
app.get('/chapter-4', (req, res) => res.render('chapter-4'));

module.exports.handler = serverless(app);