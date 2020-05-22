import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entities/User";

export default class UserController {

    static async all(request: Request, response: Response, next: NextFunction) {
        const repo = getRepository(User);
        const users = await repo.find({select:["id", "username", "firstName", "lastName"]});
        response.send(users);
    }

}