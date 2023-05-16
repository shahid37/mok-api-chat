const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const server = app.listen(3333, () => {
  console.log(`Server is listen on port 3333`);
});
