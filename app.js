require("dotenv").config();

const { connectDatabase } = require("./dbConnection");
const express = require("express");
const bodyParser = require("body-parser");
const {
  userRoutes,
  menuRoutes,
  branchRoutes,
  cartItemRoutes,
  restaurantRoutes,
} = require("./routes");

connectDatabase();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/menu", menuRoutes);
app.use("/branch", branchRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/cartItem", cartItemRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
