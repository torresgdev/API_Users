import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UpdateUserDto } from './users/dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly service:UsersService) {}

    @Post()
    create(@Body() body:CreateUserDto) {
        return this.service.create(body)
    }

    @Get()
    findAll() {
        return this.service.findAll()
    }

    @Get()
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
