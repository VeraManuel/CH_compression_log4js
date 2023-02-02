# CH_compression_log4js
Coderhouse exercise about compression and log4js

Install dependencies `npm i`

`npm run compression` to run compression example
`npm run logs` to run log4js example

* Compression

In practice:
    route /saludo does not use compression middleware should weight ~13kb
    route /saludoZip use compression middleware should weight ~3b

* Logs

- Files:
    config.js -> have the .env config for example `PROD` or `DEV`
    log.js -> Config for the log system for each level
    logServer.js -> server assign based in `NODE_ENV` variable

note: If `NODE_ENV` = `PROD` log should only write in errors.log
         `NODE_ENV` != `PROD` log should write in console, debug.log and error.log files