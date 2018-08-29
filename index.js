const { app } = require('./app');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Doctor API</h1>')
});
