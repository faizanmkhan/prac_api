import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Needed to handle ES modules pathing
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve index.html when someone visits "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(port, "0.0.0.0",() => {
  console.log(`Server running at http://localhost:${port}`);
});
