const path = require("path");
// const { init } = require("./db");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const router = require("./routes");

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "dist")));

// Router
// app.use("/api", router);

// Catch All
app.all("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
