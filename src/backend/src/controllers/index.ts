import express from 'express';
import {mobilizationRoutes} from './mobilization/routes';

export const routes = express.Router();

routes.use(mobilizationRoutes);
