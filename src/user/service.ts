import {
    Service,
    Inject,
} from 'typedi';

import { OrmRepository } from "typeorm-typedi-extensions";

import {
    User,
    UserEntity
} from './model';

import { UserRepository } from './repository';
import { UserNotFoundError } from './error'

@Service()
export class UserService {

    @OrmRepository()
    private readonly userRepository: UserRepository;

    findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    findById(id: number): Promise<UserEntity> {
        return this.userRepository.findOneById(id);
    }

    save(user: User): Promise<UserEntity> {
        let entity = user.toEntity();
        return this.userRepository.save(entity);
    }

    async update(id: number, user: User): Promise<UserEntity> {

        let entity = await this.findById(id);

        entity.update(
            user.username,
            user.password,
            user.active
        );

        return this.userRepository.save(entity);
    }

    async delete(id: number) {

        let entity = await this.findById(id);

        this.userRepository.delete(entity);

    }

    private async findOneById(id: number): Promise<UserEntity> {

        let entity = await this.findById(id);

        if (!entity)
            throw new UserNotFoundError();

        return entity;

    }

}