import {createConnection, getRepository} from 'typeorm'
import * as inquirer from 'inquirer'
import {User} from "../src/entities/User";

const questions: inquirer.QuestionCollection = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter a username'
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter a password',
    }
]
process.env.NODE_ENV = 'development';
createConnection().then(async connection => {
    const answers = await inquirer.prompt(questions);
    const { username, password } = answers;
    const repo = await getRepository(User);
    const user = await repo.create({username, password});
    user.hashPassword();
    await repo.save(user);
});

