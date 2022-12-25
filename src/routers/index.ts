import express, { Request, Response } from "express";
import ratingsRouter from "./ratings-router";
import { Express } from "express-serve-static-core";

const routes = (app: Express) => {
    app.route("/").get((req: Request, res: Response) => {
        res.sendStatus(404);
    });

    app.use(express.json(), ratingsRouter);
};

export default routes;
