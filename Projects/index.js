const express = require('express');
const users = require("./MOCK_DATA (1).json");
const app = express();
const PORT = 8000;

// HERE we define our routes
app.get('/users', (req, res) => {
    return res.json(users);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));