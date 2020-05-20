import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {IsOptional, MaxLength} from 'class-validator'

@Entity()
export class Jersey {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    number: number;

    @Column({nullable: true})
    @IsOptional()
    @MaxLength(500)
    comment: string;

}
