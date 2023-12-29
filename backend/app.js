const express = require("express");
const app = express();
const cors  = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth")


app.use(cors());
app.use(morgan('tiny'));

app.use("/auth", authRoutes)



module.exports = app;