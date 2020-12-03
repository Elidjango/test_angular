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
app.use(cors({origin: "http://localhost:4200"}));

// -> Routes
app.use('/api', router);

// Init server
app.listen(app.get("port"), () => {
    console.log(`http://localhost:${port}/`);
    console.log("-------------------------");
});