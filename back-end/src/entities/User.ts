import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { compareSync, hashSync } from 'bcrypt'
import { Length } from 'class-validator'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    firstName: string;

    @Column({nullable: true})
    lastName: string;

    @Column()
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
