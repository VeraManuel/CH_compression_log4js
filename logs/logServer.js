const express = require("express");
const log = require("./log");
const config = require('./config')


const app = express();
const PORT = 8080;

let logger;

app.use(express.urlencoded({ urlencoded: false }));
app.use(express.json());

if (config.NODE_ENV === "PROD") {
  logger = log.getLogger('prod');
} else {
  logger = log.getLogger('dev');
}

app.get("/sumar", (req, res) => {
  const num1 = +req.query.num1;
  const num2 = +req.query.num2;
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("uno de los 2valores no es un numero");
    // logica de que hacer si falla
  } else {
    const suma = num1 + num2;
    logger.info(`La suma entre ${num1} y ${num2} es ${suma}`);
    res.send(`La suma entre ${num1} y ${num2} es ${suma}`);
  }
});


app.listen(PORT, () => {
  logger.info("puerto 8080");
});
