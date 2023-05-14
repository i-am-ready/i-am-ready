import express, {Application} from 'express';
import dotenv from 'dotenv';
import {routes} from './controllers';
import bodyParser from 'body-parser';
import {bigIntTransformer} from "./transformers/big-int-transformer";
import {expressErrorHandler} from "./handlers/expressErrorHandler";
import cors from 'cors';
//import swaggerUi, {SwaggerUiOptions} from "swagger-ui-express";

const app: Application = express();

// cors
const allowedOrigins = [
    'http://localhost:5500',
    'http://localhost:4200',
];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));

// body-parser
app.use(bodyParser.json({ limit: '50mb', type: 'application/json', reviver: bigIntTransformer}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
dotenv.config();

// const
const urlRoot= `http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`;

// routes
app.use('/api', routes);

// swagger
// app.use(
//     "/api-docs",
//     swaggerUi.serve,
//     swaggerUi.setup(undefined, {
//         swaggerOptions: {
//             url: "/api/swagger.json",
//         } as SwaggerUiOptions,
//     })
// );

// error handling
app.use(expressErrorHandler);
process.on('uncaughtException', (error: Error) => {
    console.error(`Uncaught Exception: ${error.message}`);
});

// start service
app.listen(process.env.BACK_PORT, () => {
    console.log(`server running : ${urlRoot}`);
});