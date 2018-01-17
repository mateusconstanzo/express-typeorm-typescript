import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm";

import {
    IsNotEmpty,
    IsNumber,
    IsBoolean
} from 'class-validator';

export class User {

    @IsNotEmpty()
    username: string = '';

    @IsNotEmpty()
    password: string = '';

    @IsBoolean()
    active: boolean = true;

    toEntity(): UserEntity {
        return new UserEntity(this.username, this.password);
    }

}

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column('varchar', {
        length: 100
    })
    username: string;

    @Column('varchar', {
        length: 100
    })
    password: string;

    @Column('tinyint')
    active: boolean;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.active = true;
    }

    public update(username: string, password: string, active: boolean) {
        this.username = username;
        this.password = password;
        this.active = active;
    }

}