const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db');
const PORT = process.env.PORT || 3000;
const CLIENT = process.env.CLIENT;
const app = express();
const routes = require('./routes/index');
const cors = require('cors');
const path = require('path');

app.use(cors({
  origin: CLIENT,
}));
app.use('/images', express.static(path.join(__dirname, 'uploads')));

// app.use('/images', express.static('images'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Handle undefined routes
app.all("/*", (req, res) => {
  res.send('Page Not Found');
});

// Start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to DB:', err);
  });
