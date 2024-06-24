const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const db = require('./keys').mongoURI; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/cities', require('./routes/cities'));

app.get('/', (req, res) => { 
  res.send('Hello, World!'); 
});

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connection to MongoDB established'))
  .catch(err => {
    console.log('Error connecting to MongoDB:', err.message);
  });

app.listen(port, () => {
  console.log("Server is running on " + port);
});
