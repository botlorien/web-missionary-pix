const express = require('express');
const app = express();
const port = 3000; // You can use any other preferred port

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
