import express from "express";
import { RatingController } from "../controllers/rating-controller";
import { Router } from "express-serve-static-core";

const ratingsRouter: Router = express.Router();

//Lista de todas avaliações
ratingsRouter.get("/ratings", RatingController.getAllRatings);

//Ranking da maior avaliação para a menor
ratingsRouter.get("/getRanking", RatingController.getRanking);

//Criar uma avaliação
ratingsRouter.post("/rating", RatingController.createNewRating);

//Atualizar uma avaliação existente
ratingsRouter.put("/ratings/:id", RatingController.updateRating);

//Deletar uma avaliação
ratingsRouter.delete("/ratings/:id", RatingController.deleteRating);

export default ratingsRouter;
