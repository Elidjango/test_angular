const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/routes");
const app = express();
const port = 8285;

// -> Config
app.set("port", process.env.PORT || port);

// -> Middlewares
app.use(morgan("dev"));
app.use(express.json());

// -> Cors
// app.use(cors({origin: "http://localhost:4200"}));
app.all('*', function(req, res,next) {
    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

// -> Routes
app.use('/api', router);

// Init server
app.listen(app.get("port"), () => {
    console.log(`http://localhost:${port}/`);
    console.log("-------------------------");
});