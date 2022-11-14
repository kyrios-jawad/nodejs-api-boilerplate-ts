import { Router } from "express";
import admin from "./admin.routes";
import user from "./user.routes";


const router: Router = Router();

router.use("/user", user);
router.use("/admin", admin);

export default router;