const path = require("path");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/status", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});
app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
