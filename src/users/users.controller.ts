import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {UsersService} from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly userService : UsersService){}

    @Get()
    getAllUser(): {}[]{
        return this.userService.getAllUsers();
    }

    @Post()
    createUser(@Body() userData : {name : string, age: number}): {}{
        return this.userService.createUser(userData)
    }

    @Get(":id")
    getUser(@Param("id") id : number): {}{
        return this.userService.getUser(+id);
    }

    @Put(":id")
    updateUser(@Param("id") id: number , @Body() updateUser: {}): {}{
        return this.userService.updateUser(+id, updateUser)
    }

    @Delete(":id")
    deleteUser(@Param("id") id: number): {}[]{
        return this.userService.delUser(+id);
    }
}
