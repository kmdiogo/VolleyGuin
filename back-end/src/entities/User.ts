import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { compareSync, hashSync } from 'bcrypt'
import {Length, min} from 'class-validator'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1)
    firstName: string;

    @Column()
    @Length(1)
    lastName: string;

    @Column({ unique: true })
    @Length(4, 20)
    username: string;

    @Column()
    @Length(4, 100)
    password: string;

    hashPassword() {
        this.password = hashSync(this.password, 8);
    }

    comparePassword(unencrypted: string) {
        return compareSync(unencrypted, this.password);
    }

}
