import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";


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

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
}

