import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column({name: 'created_at'})
    createdAt: Date;
}

