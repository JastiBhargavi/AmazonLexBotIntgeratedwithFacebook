const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');

const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function handleIntent(agent) {
    const userInput = agent.query;
    const lexResponse = sendToLex(userInput);
    agent.add(lexResponse.message);
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', handleIntent);

  agent.handleRequest(intentMap);
});

function sendToLex(userInput) {
  // Code to interact with Amazon Lex (using AWS SDK)
  return lexResponse;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server listening on port ${PORT});
});