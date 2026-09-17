const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));
app.get('/project-concepts', (req, res) => res.render('project-concepts'));
app.get('/features', (req, res) => res.render('features'));
app.get('/contributors', (req, res) => res.render('contributors'));
app.get('/contact', (req, res) => res.render('contact'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});