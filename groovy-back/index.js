const express = require('express');
const cors = require('cors');
const songRoutes = require('./routes/songs');
const mongoose = require('mongoose');

const app = express();
const port = 3001;



// Replace 'your_database_name' and 'your_connection_string' with your MongoDB details
const dbName = 'groovy';
const connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.use(cors());
app.use(express.json());

app.use('/api/songs', songRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});