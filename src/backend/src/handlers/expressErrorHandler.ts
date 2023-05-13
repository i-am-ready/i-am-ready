import {ErrorRequestHandler} from "express";

export const expressErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json(err);
};
