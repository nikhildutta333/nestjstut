import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH users/:id
    DELETE users/:id
    */

  constructor (private readonly usersService: UsersService) {}
  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER'| 'ADMIN'){
    return this.usersService.findAll(role)
  }



  @Get(':id')
  findOne(@Param("id") id:string){
    return this.usersService.findOne(+id)
  }

  @Post()
  create(@Body() user: { name: string,email: string,role: 'INTERN'| 'ENGINEER'| 'ADMIN'}){
    return this.usersService.create(user)
  }

  
  @Patch(":id")
  update(@Param('id') id:string,@Body() userUpdate:{ name: string,email: string,role: 'INTERN'| 'ENGINEER'| 'ADMIN'}){
    return this.usersService.update(+id,userUpdate)
  }
  
  
  @Delete(':id')
  del(@Param("id") id:string){
    return this.usersService.delete(+id)
    
  }
  
  

}
