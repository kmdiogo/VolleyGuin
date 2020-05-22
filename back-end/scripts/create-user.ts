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
        type: 'input',
        name: 'firstName',
        message: 'Enter a first name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Enter a last name'
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
    const { username, firstName, lastName, password } = answers;
    const repo = await getRepository(User);
    const user = await repo.create({username, firstName, lastName, password});
    user.hashPassword();
    await repo.save(user);
});

