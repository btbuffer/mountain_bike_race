const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/index.route");

// She boards a car with plate number: APP 907 CM
dotenv.config({ path: "./.env", quiet: true });

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(`MountRacer listens on port ${PORT}`);
});

mongoose
  .connect(process.env.DBURI)
  .then(() => console.log("MongoDB connection established!"))
  .catch((err) => console.log("MongoDB connectionError: ", err.message));

module.exports = app;
