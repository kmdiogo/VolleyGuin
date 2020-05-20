import { Router } from "express";
import { checkJwt } from "../middleware/check-jwt"
import PlayerController from "../controllers/PlayerController";

const router = Router();

router.get('/', [], PlayerController.all)
router.get('/:id([0-9]+)', [], PlayerController.one)

router.post('/', [], PlayerController.create)
router.post('/:id([0-9]+)', [], PlayerController.save)

router.delete('/:id([0-9]+)', [], PlayerController.remove)

export default router;
