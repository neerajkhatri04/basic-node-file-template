const express = require("express");
const { ServerConfig, Logger } = require("./config");
const app = express();
const router = express.Router();
const apiRoutes = require("./routes");

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Listening on PORT: ${ServerConfig.PORT}`);
  Logger.info("successfully started the server");
});
