import { Service } from 'typedi';

import {
    EntityRepository,
    Repository,
    EntityManager
} from "typeorm";

import { UserEntity } from "./model";

@Service()
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

}