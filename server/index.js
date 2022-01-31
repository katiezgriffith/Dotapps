import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.status(200).send("You hit the root endpoint")
})


app.listen(4000, () => console.log("Server is listening on port 4000"));
