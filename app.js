require('dotenv').config();
// const router=require("./Routes/router");
const express = require("express");
const app = express();
const cors = require("cors");

require("./db/conn");

const PORT = 3000;

app.use(cors());

app.use(express.json());
// app.use(router);
app.use(require('./Routes/router'));

app.use("/files",express.static("./public/files"));

app.listen(PORT, () => {
    console.log(`Server start at port no ${PORT}`);
});
