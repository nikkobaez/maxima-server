const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(cors());
app.use(express.json());

let alerts = [];

app.get('/', (_, response) => {
    response.send('Hello, World!');
});

app.get('/api/alerts', (_, response) => {
    response.json(alerts);
    alerts = [];
})

app.post('/api/alerts', (request, response) => {
    const { prediction, confidence, timestamp } = request.body;
    alerts.push({prediction, confidence, timestamp});
    response.status(200).send();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});