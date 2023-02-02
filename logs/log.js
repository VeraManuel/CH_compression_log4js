const log4js = require("log4js");

const log = log4js.configure({
  appenders: {
    miLoggerConsole: { type: "console" },
    debugFile: { type: "file", filename: "./log/debug.log" },
    errorFile: { type: "file", filename: "./log/errors.log" },
  },
  categories: {
    default: { appenders: ["miLoggerConsole"], level: "trace" },
    prod: { appenders: ["errorFile"], level: "error" },
    dev: { appenders: ["miLoggerConsole", "debugFile", "errorFile"], level: "info" },
  },
});

module.exports = log