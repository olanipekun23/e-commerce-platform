// app.js
const express = require("express");
const app = express();

// Health check route (optional, useful for Kubernetes readiness/liveness probes)
app.get("/health", (req, res) => res.send("OK"));

// Root route
app.get("/", (req, res) => res.send("Products here"));

// Products route
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
  ]);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Product service running on port ${PORT}`));

