const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.json({info:`¡Hello world!, api runnin at port ${port}`});
} );

app.listen(port, () => {
  console.log(`Api running at port ${port} `);
});
