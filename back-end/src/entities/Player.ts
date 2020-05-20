import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail, MaxLength, IsOptional } from "class-validator";

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

    @Column({nullable: true})
    @IsOptional()
    @IsEmail()
    email: string

    @Column({nullable: true})
    @IsOptional()
    @MaxLength(500)
    comment: string


}
