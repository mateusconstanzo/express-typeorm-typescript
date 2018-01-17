import {
    JsonController,
    Get, Post, Put, Delete,
    Param,
    Body,
    HttpCode,
    OnUndefined
} from 'routing-controllers';

import {
    IsNotEmpty,
    IsNumber
} from 'class-validator';

import {
    User,
    UserEntity
} from './model';

import { UserService } from './service';
import { UserNotFoundError } from './error'

@JsonController("/users")
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Get()
    getAll() {
        return this.userService.findAll();
    }

    @Get("/:id")
    @OnUndefined(404)
    getOne( @Param("id") id: number) {
        return this.userService.findById(id);
    }

    @Post()
    save( @Body() user: User) {
        return this.userService.save(user);
    }

    @Put("/:id")
    @OnUndefined(UserNotFoundError)
    put( @Param("id") id: number, @Body() user: User) {
        return this.userService.update(
            id,
            user
        );
    }

    @Delete("/:id")
    @HttpCode(201)
    async delete( @Param("id") id: number) {
        await this.userService.delete(id);
        return 'delete'
    }

}