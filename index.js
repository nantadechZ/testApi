const express = require('express');
const app = express();

const data = [
  { Province: 'Bangkok', Confirmed: 1234, Recovered: 1111, Hospitalized: 111, Deaths: 11 },
  { Province: 'Chiang Mai', Confirmed: 222, Recovered: 222, Hospitalized: 0, Deaths: 0 },
  { Province: 'Phuket', Confirmed: 333, Recovered: 333, Hospitalized: 0, Deaths: 0 },
  { Province: 'Surat Thani', Confirmed: 444, Recovered: 444, Hospitalized: 0, Deaths: 0 },
  { Province: 'Songkhla', Confirmed: 555, Recovered: 555, Hospitalized: 0, Deaths: 0 }
];

// Define your custom secret key
const SECRET_KEY = '15082541';

// Define a middleware function to check for the key


// Use the middleware function to protect your API path
app.get('/api/provinces', (req, res) => {
  res.json(data);
});

// app.listen(3002, () => {
//   console.log('API server listening on http://localhost:3002');
// });
