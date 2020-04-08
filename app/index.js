const url = require('url');
const {Factorial} = require("./service/index");
const config = require('./config/config');
const hostname = config.host;
const port = config.port;
const logger = require("./config/logger");
const server = require("http").createServer();

server.on("request", (req, res) => {
    const queryObject = url.parse(req.url,true).query;
    const number = parseInt(queryObject.number);
    const factorial = new Factorial();
    try{
        res.setHeader('Content-Type', 'application/json');
        for(const i of factorial.calculate_generator(number)){
            res.write(`${i.toString()}\n`);
        }
        res.statusCode = 200;
        res.end();
    } catch(exception){
        res.statusCode = 400;
        return res.end(`error: ${exception.message}`);
    }
});

server.listen(port, hostname, () => {
    logger.info(`Server running at http://${hostname}:${port}/`);
});