import { ConnectionOptions } from 'typeorm';

import { UserEntity } from './user'

export let BdConfig: ConnectionOptions = {
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'api',
    entities: [
        UserEntity,
    ],
    synchronize: true
}