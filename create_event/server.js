const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//Jain, Sandeep. “Body-parser Middleware in Node.js.” GeeksforGeeks, 9 October 2024, https://www.geeksforgeeks.org/body-parser-middleware-in-node-js/. Accessed 15 December 2024.

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

let draftData = null;
let submittedData = [];

app.post('/saveDraft', (req, res) => {
  draftData = req.body;
  
  console.log('Draft saved:', draftData);
  res.json({ message: 'Draft saved successfully', data: draftData });
});


app.post('/submitEvent', (req, res) => {
  
  submittedData.push(req.body);
  
  console.log('Event submitted:', req.body);
  res.json({ message: 'Event submitted successfully', data: req.body });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'create_event.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
