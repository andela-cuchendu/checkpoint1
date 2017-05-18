import express from 'express';

import path from 'path';

const port = process.env.PORT || 8009;
const app = express();

// serve static assets normally
app.use(express.static(`${__dirname}/public`));
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port);
console.log(`server started on port ${port}`);
