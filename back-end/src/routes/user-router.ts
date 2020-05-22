import { Router } from "express";
import { checkJwt } from "../middleware/check-jwt"
import UserController from "../controllers/UserController";

const router = Router();

router.get('/', [], UserController.all)

export default router;
