const express = require('express');
const cors = require('cors');
const songRoutes = require('./routes/songs');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/songs', songRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});