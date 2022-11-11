import express from "express";
import { Request, Response, NextFunction } from "express";
const app = express();
const PORT: Number = 3000;
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import routes from './routes/index.routes'

dotenv.config();

app.use(bodyParser.json());


app.use("/api", routes);

//404 response
app.use((error: any, res: Response, next: NextFunction) => {
    try {
        res.status(404).send({ success: false, message: "Invalid Api Request" });
    } catch (error) {
        next(error);
    }
});

app.use((error: any, res: Response, next: NextFunction) => {
    try {
        const status = error.status || 500;
        const message =
            error.message ||
            "There was an error while processing your request, please try again";
        return res.status(status).send({
            status,
            message,
        });
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