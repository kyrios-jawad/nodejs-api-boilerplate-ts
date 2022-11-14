import { Router } from "express";
import * as user from "../controller/user.controller";
import errorHandler from "../middleware/errorHandller";

const router: Router = Router();

router.post("/health",errorHandler(user.health));

export default router;