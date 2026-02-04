const express = require("express");
const app = express();
app.use(express.json());

let cart = [];

app.get("/cart", (req, res) => {
  res.json(cart); // return the current cart
});

app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Item added to cart", cart });
});

app.delete("/cart/:id", (req, res) => {
  cart = cart.filter(item => item.id != req.params.id);
  res.json({ message: "Item removed", cart });
});

app.listen(3000, () => {
  console.log("Cart service running on port 3000");
});

