const url = require('url');
const {Factorial} = require("./service/index");
const config = require('./config/config');
const hostname = config.host;
const port = config.port;
const logger = require("./config/logger");
const server = require("http").createServer();

server.on("request", (req, res) => {
    const queryObject = url.parse(req.url,true).query;
    let number = parseInt(queryObject.number);
    const factorial = new Factorial();
    try {
        if(isNaN(number) || number <= 0){
            number = 1;
        }
        res.setHeader('Content-Type', 'text/html');
        for(const i of factorial.calculate_generator(number)){
            res.write(`${i.toLocaleString('fullwide', {useGrouping:false}).toString()}\n`);
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