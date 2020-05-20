import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Player} from "../entities/Player";
import {NOT_FOUND, BAD_REQUEST, CREATED, OK, INTERNAL_SERVER_ERROR} from 'http-status-codes'
import {validate} from 'class-validator'

export default class PlayerController {

    static async all(request: Request, response: Response, next: NextFunction) {
        const repo = getRepository(Player);
        const users = await repo.find();
        response.send(users);
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const repo = getRepository(Player);
        const id = request.params.id;
        try {
            const user = await repo.findOneOrFail(id);
            response.send(user);
        } catch {
            response.status(NOT_FOUND).send({error: `Player with id '${id}' not found.`});
        }
    }

    static async create(request: Request, response: Response, next: NextFunction) {
        //const { username, firstName, lastName, password } = request.body;
        const repo = getRepository(Player);
        const player = repo.create(request.body as Object);

        const errors = await validate(player);
        if (errors.length > 0) {
            response.status(BAD_REQUEST).send(errors);
            return;
        }

        // Check if already exists
        const existingUser = await repo.findOne({where: {yNumber: player.yNumber}});
        if (existingUser) {
            response.status(BAD_REQUEST).send({error: 'A  player with that y-number already exists.'});
            return;
        }

        try {
            await repo.save(player);
        } catch (e) {
            response.status(INTERNAL_SERVER_ERROR).send({error: e.message});
            return;
        }

        response.status(CREATED).send(player);
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        const repo = getRepository(Player);
        const id = request.params.id;
        let playerToRemove = await repo.findOne(id);

        if (!playerToRemove) {
            response.status(NOT_FOUND).send({error: `Player with id '${id}' not found.`});
            return;
        }

        const savedPlayer = await repo.save(playerToRemove);
        response.status(OK).send(savedPlayer);
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const repo = getRepository(Player);
        const id = request.params.id;
        let playerToEdit = await repo.findOne(id);

        if (!playerToEdit) {
            response.status(NOT_FOUND).send({error: `Player with id '${id}' not found.`});
            return;
        }

        let updatedPlayer: Player = {
            ...playerToEdit,
            ...request.body
        }
        const errors = await validate(updatedPlayer)
        if (errors.length > 0) {
            response.status(BAD_REQUEST).send(errors)
            return
        }

        try {
            await repo.save(updatedPlayer)
        } catch (e) {
            response.status(INTERNAL_SERVER_ERROR).send({error: e.message})
            return
        }

        response.send(updatedPlayer)
    }

}
