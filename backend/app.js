const express = require("express");
const app = express();
const cors  = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")


app.use(cors());
app.use(morgan('tiny'));

app.use("/auth", authRoutes)
app.use("/users", userRoutes)


module.exports = app;