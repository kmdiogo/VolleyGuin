import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    yNumber: string

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @IsEmail()
    email: string


}
