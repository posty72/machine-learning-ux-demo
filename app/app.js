const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const path = require('path');
const config = require('./config');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

AWS.config.loadFromPath('./app/aws-creds.json');

const machineLearning = new AWS.MachineLearning();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.post('/predict', (req, res) => {
    const params = {
        MLModelId: config.machineLearningId,
        PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com',
        Record: req.body,
    };

    console.log(req.body);

    machineLearning.predict(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                reported_by: data.Prediction.predictedLabel
            });
        }
    });
});

app.listen(8080);
