import 'express-async-errors';
import express from 'express';
import {Signature} from "../../models/signature";
import {fetchByPhone, insertSignature, signatureExistsByPhone} from "../../repository/signatures.repository";
import {bigIntTransformer} from "../../transformers/big-int-transformer";
import {parsePhoneNumber} from "awesome-phonenumber";
import {fetchCountryCode} from "../../repository/ip2location-db1.repository";

export const ipGeolocationRoutes = express.Router();

ipGeolocationRoutes.get('/country', async (req, res) => {
    const ip = req.socket.remoteAddress;
    if(!ip) {
        res.status(204);
        return;
    }
    const ipnum = ip.split('.').reduce(function(int, value) { return int * 256 + +value }, 0);
    const code= await fetchCountryCode(ipnum);
    res.json(code);
});

ipGeolocationRoutes.get('/country/:ip', async (req, res) => {
    const ipnum = req.params.ip.split('.').reduce(function(int, value) { return int * 256 + +value }, 0);
    const code= await fetchCountryCode(ipnum);
    res.json(code);
});
