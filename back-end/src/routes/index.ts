import { Router, Request, Response } from 'express'
import authRouter from './auth-router'

const routes = Router();

// Add controller routes here
routes.use('/auth', authRouter)
routes.get('/', (req, res) => {
    res.send("VolleyGuin API | Triggs Software (lmao)")
});

export default routes;
