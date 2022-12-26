import { IRating } from "./../interfaces/IRating";
import { Request, Response } from "express";
import { CallbackError, HydratedDocument } from "mongoose";
import { Rating } from "../models/Rating";

export class RatingController {
    //Lista de todas avaliações
    static getAllRatings = (req: Request, res: Response): void => {
        Rating.find((err: CallbackError, rating: HydratedDocument<IRating>) => {
            res.json(rating);
        });
    };

    //Ranking da maior avaliação para a menor
    static getRanking = (req: Request, res: Response): void => {
        Rating.find()
            .then((list: HydratedDocument<IRating>[]) => {
                list.sort((r1, r2) => {
                    if (r1.value < r2.value) {
                        return 1;
                    }

                    if (r2.value < r1.value) {
                        return -1;
                    }

                    return 0;
                });
                res.json(list);
            })
            .catch((err: CallbackError) => {
                res.status(500).send(err?.message);
            });
    };

    //Criar uma avaliação
    static createNewRating = (req: Request, res: Response): void => {
        if (typeof req.body.value !== "number") {
            res.status(500).send({
                message: `the value field only accepts numbers - failed to register rating`,
            });
        }
        const newRating: HydratedDocument<IRating> = new Rating({
            name: req.body.name,
            value: req.body.value,
        });

        newRating.save((err: CallbackError) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - failed to register rating`,
                });
            } else {
                res.status(201).send(newRating.toJSON());
            }
        });
    };

    //Atualizar uma avaliação existente
    static updateRating = (req: Request, res: Response): void => {
        const { id } = req.params;

        Rating.findByIdAndUpdate(
            id,
            { $set: req.body },
            (err: CallbackError) => {
                if (!err) {
                    res.status(200).send(`rating updated successfully`);
                } else {
                    res.status(500).send({ message: err.message });
                }
            }
        );
    };
}
