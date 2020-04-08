const dotenv = require("dotenv");
const path = require("path");
const Joi = require("@hapi/joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    HOSTNAME: Joi.string().required(),
    PORT: Joi.number().required(),
    MONGODB_URL: Joi.string()
      .required()
      .description("Mongo DB url")
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

module.exports = {
  env: process.env.NODE_ENV,
  port: envVars.PORT,
  host: envVars.HOSTNAME,
  mongoose: {
    url: envVars.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};
