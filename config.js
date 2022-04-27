const dotenv = require("dotenv");
const envFile = process.env.ENV ? process.env.ENV + ".env" : ".env";
dotenv.config({ path: envFile });

module.exports = {
  API_PORT: process.env.PORT || 4000,
};
