import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MaxLength } from 'class-validator'

@Entity()
export class Jersey {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    number: number;

    @Column()
    @MaxLength(500)
    comment: string;

}
