import { Router } from "express";
import AuthController from '../controllers/AuthController'
import { checkJwt } from "../middleware/check-jwt"

const router = Router();

router.post('/', AuthController.login)
router.post('/password/:id([0-9]+)', [checkJwt], AuthController.changePassword)
router.post('/refresh', AuthController.refresh)

export default router;