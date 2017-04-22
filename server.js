const express = require('express');

const path = require('path');

const port = process.env.PORT || 3003;
const app = express();

// serve static assets normally
app.use(express.static(`${__dirname}/public`));
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port);
console.log(`server started on port ${port}`);
