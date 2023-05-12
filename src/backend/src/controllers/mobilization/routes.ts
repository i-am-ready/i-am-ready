import express from 'express';
import {Signature} from "../../models/signature";
import {insertSignature, signatureExistsByPhone} from "../../repository/signatures";
import {bigIntTransformer} from "../../transformers/big-int-transformer";
import {parsePhoneNumber} from "awesome-phonenumber";

export const mobilizationRoutes = express.Router();

mobilizationRoutes.post('/sign', async (req, res) => {
    const signature = req.body as Signature;

    const parsedPhone = parsePhoneNumber(signature.phone);
    if (!parsedPhone.possible) {
        res.status(406).send(`Phone number '${signature.phone}' is not possible because: '${parsedPhone.possibility}'`);
        return;
    }

    signature.phone = parsedPhone.number!.e164;
    const addedSignature = await insertSignature(signature);

    res.status(201);
    const json = JSON.stringify(addedSignature, bigIntTransformer);
    res.send(json);
});

mobilizationRoutes.get('/sign-exists/:number', async (req, res) => {
    res.json(await signatureExistsByPhone(req.params.number));
});
mobilizationRoutes.get('/parse-number/:number', (req, res) => {
    res.json(parsePhoneNumber(req.params.number));
});