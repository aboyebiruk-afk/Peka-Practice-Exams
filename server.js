const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, images, JS)
app.use(express.static(path.join(__dirname)));

// Handle form submission
app.post("/submit", (req, res) => {
    console.log("✅ Form Data Received:", req.body);

    // Save each submission into submissions.json
    fs.appendFileSync("submissions.json", JSON.stringify(req.body) + "\n");

    res.json({ success: true, message: "Form submitted successfully!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
