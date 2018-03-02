const express = require("express");
const app = express();
const server = app.listen(3000, function () {
  console.log("TimeTable manager listening on port 3000");
});
app.use(express.static("public"));
