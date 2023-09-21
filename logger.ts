import winston from "winston";

export const logger = winston.createLogger({
  level: (
    process.env.LOG_LEVEL ||
    (process.env.NODE_ENV === "production" ? "info" : "debug")
  ).toLowerCase(),
  format: winston.format.simple(),
  transports: [new winston.transports.Console({})],
});
