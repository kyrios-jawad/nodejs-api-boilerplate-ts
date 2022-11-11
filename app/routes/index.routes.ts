import { Router } from "express";
import * as auth from "../controller/auth.controller";
import errorHandler from "../middleware/errorHandller";
const router: Router = Router();

router.post("/health",errorHandler(auth.health));

export default router;