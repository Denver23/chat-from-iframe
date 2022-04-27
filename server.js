const app = require("./app");
const config = require("./config");

app.listen(config.API_PORT, () => {
  console.log(`API: http://localhost:${config.API_PORT}`);
});
