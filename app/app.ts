import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import routes from './routes/index.routes';
const app = express();
const PORT: Number = 3000;

dotenv.config();

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

const port = PORT || 3000;
app.listen(port, () => {
    console.log(`App is running at http://localhost:${port} in development mode`,);
    console.log(`Press CTRL-C to stop\n`);
});
export default app;