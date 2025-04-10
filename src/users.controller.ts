import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UpdateUserDto } from './users/dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private readonly service:UsersService) {}

    @Post()
    @ApiOperation({summary: 'Create a new user'})
    @ApiResponse({ status: 201, description: 'User created with success'})
    create(@Body() body:CreateUserDto) {
        return this.service.create(body)
    }

    @Get()
    @ApiOperation({summary: 'List all users'})
    findAll() {
        return this.service.findAll()
    }

    @Get()
    @ApiOperation({summary: 'search a user with id'})
    findOne(@Param('id') id: string){
        return this.service.findOne(+id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:UpdateUserDto) {
        return this.service.update(+id,body)
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        return this.service.remove(+id)
    }

}
