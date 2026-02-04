const express = require("express");
const app = express();

app.use(express.json());

// In-memory order store (for demo purposes)
let orders = [];

/**
 * Create a new order
 */
app.post("/orders", (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    items: req.body.items || [],
    total: req.body.total || 0,
    status: "CREATED",
    createdAt: new Date()
  };

  orders.push(newOrder);
  res.status(201).json({
    message: "Order created successfully",
    order: newOrder
  });
});

/**
 * Get all orders
 */
app.get("/orders", (req, res) => {
  res.json(orders);
});

/**
 * Get a single order by ID
 */
app.get("/orders/:id", (req, res) => {
  const order = orders.find(o => o.id == req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
});

app.listen(3000, () => {
  console.log("Order service running on port 3000");
});

