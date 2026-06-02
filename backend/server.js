const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.get("/", (req, res) => {
  res.send("Ahmed Ecommerce Backend Running");
});

app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server Started On Port 3000");
});
