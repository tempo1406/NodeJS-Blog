const express = require("express");
const { engine } = require("express-handlebars"); // Dùng require thay vì import
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public"))); // Dùng path.join để nối đường dẫn
// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({
    extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
