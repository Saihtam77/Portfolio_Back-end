const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const projectsRoute = require("./ProjectRoutes");
const techsRoute = require("./TechsRoutes");
const FileUploadRoute = require("./FileUploadRoute");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors({ origin: true })); // Configure CORS to allow requests from your Angular app


app.use("/", projectsRoute);
app.use("/", techsRoute);
app.use("/", FileUploadRoute);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
