import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { BAD_REQUEST, UNAUTHORIZED, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { User } from '../entities/User'
import * as jwt from 'jsonwebtoken'
import config from '../../config'
import { JWTPayload } from '../types'
import {validate} from 'class-validator'

export default class AuthController {

    static async login(req: Request, res: Response) {
        let { username, password } = req.body;
        if (!(username && password)) {
            res.status(BAD_REQUEST).send({ error: "Invalid Credentials." });
        }

        // Get employee from database
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({ where: { username } });
        } catch (error) {
            res.status(UNAUTHORIZED).send({ error: `User ${username} does not exist.` });
            return;
        }

        // Check if encrypted password match
        if (!user.comparePassword(password)) {
            res.status(UNAUTHORIZED).send({ error: "Invalid Credentials." });
            return;
        }

        // Sign JWT, valid for 1 hour
        const payload: JWTPayload = {
            userId: user.id,
            username: user.username
        }
        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiration });

        // Send the jwt in the response
        res.send({ token });

    }

    static async refresh(req: Request, res: Response) {
        const { token } = req.body;
        let payload: JWTPayload;
        try {
            const oldPayload = jwt.verify(token, config.jwtSecret) as JWTPayload;
            payload = { userId: oldPayload.userId, username: oldPayload.username };
        } catch (e) {
            res.status(BAD_REQUEST).send({ error: "Invalid JWT." });
            return 
        }

        const newToken = jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiration });
        res.send({ token: newToken });


    }

    static async changePassword(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const newPassword = req.body.password as string;
        const payload = res.locals.jwtPayload as JWTPayload;
        if (id !== payload.userId) {
            res.status(UNAUTHORIZED).send({error: "You are not authorized to do this."})
            return;
        }

        const userRepo = getRepository(User);
        let user: User;
        try {
            user = await userRepo.findOneOrFail(id);
        } catch (error) {
            res.status(UNAUTHORIZED).send({ error: `User ${payload.username} does not exist.` });
            return;
        }

        user.password = newPassword;
        const errors = await validate(user);
        if (errors.length > 0) {
            res.status(BAD_REQUEST).send(errors);
            return;
        }
        user.hashPassword();
        try {
            userRepo.save(user);
        } catch (e) {
            res.status(INTERNAL_SERVER_ERROR).send({error: e.message})
        }

        res.send(user);
        
    }
}
