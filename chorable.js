const express = require('express');
const app = express();

/* MIDDLEWARE */
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

