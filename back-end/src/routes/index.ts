import { Router, Request, Response } from 'express'
import authRouter from './auth-router'
import userRouter from './user-router'

const routes = Router();

// Add controller routes here
routes.use('/auth', authRouter)
routes.use('/user', userRouter)
routes.get('/', (req, res) => {
    res.send("VolleyGuin API | Triggs Software (lmao)")
});

export default routes;
