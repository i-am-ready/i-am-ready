import express from 'express';
import {Signature} from "../../models/signature";
import {insertSignature} from "../../repository/signatures";
import {bigIntTransformer} from "../../transformers/big-int-transformer";

export const mobilizationRoutes = express.Router();

mobilizationRoutes.post('/sign', async (req, res) => {
    const signature = req.body as Signature;
    const addedSignature = await insertSignature(signature);
    res.status(201);
    const json = JSON.stringify(addedSignature, bigIntTransformer);
    res.send(json);
});