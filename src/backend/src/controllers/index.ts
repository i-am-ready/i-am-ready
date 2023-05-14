import express from 'express';
import {mobilizationRoutes} from './mobilization/routes';
import {ipGeolocationRoutes} from "./ip-geolocation/routes";

export const routes = express.Router();

routes.use('/mobilization', mobilizationRoutes);
routes.use('/ip-geolocation', ipGeolocationRoutes);
