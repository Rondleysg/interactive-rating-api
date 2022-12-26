import express from "express";
import db from "./config/dbConnect";
import routes from "./routers";
import { Express } from "express-serve-static-core";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
    console.log("successful connection to database");
});

const PORT: string = process.env.PORT || "4000";
const HOSTNAME: string = "http://localhost";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
});

routes(app);

app.listen(PORT, () => {
    console.log(`Server running successfully ${HOSTNAME}:${PORT}`);
});
