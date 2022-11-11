import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import routes from './routes/index.routes';
import { config } from "./config/config";
const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

// 404 response
app.use((error: any, res: Response, next: NextFunction) => {
    try {
        res.status(404).send({ success: false, message: "Invalid Api Request" });
    } catch (error) {
        next(error);
    }
});

// global error handler
app.use((error: any, res: Response, next: NextFunction) => {
    try {
        const status = error.status || 500;
        const message = error.message || "There was an error while processing your request, please try again";
        return res.status(status).send({ status, success: false, message, });
    } catch (error) {
        next(error);
    }
});
app.listen(config.port || 3000 , () => {
    console.log(`App is running at http://localhost:${config.port} in ${process.env.NODE_ENV} mode`,);
    console.log(`Press CTRL-C to stop\n`);
});
export default app;