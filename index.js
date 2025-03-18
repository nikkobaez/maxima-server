const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(cors());
app.use(express.json());

let alerts = [];

app.get('/api/alerts', (_, response) => {
    response.json(alerts);
    alerts = [];
})

app.post('/api/alerts', (request, response) => {
    const { prediction, confidence, timestamp } = request.body;
    alerts.push({prediction, confidence, timestamp});
    response.status(200).send();
});

app.listen(3000, () => {
    console.log(`Server Listening To Port 3000`)
});