import { Router } from "express";
import * as admin from "../controller/admin/admin.controller";
import errorHandler from "../middleware/errorHandller";

const router: Router = Router();

router.post("/health",errorHandler(admin.health));

export default router;