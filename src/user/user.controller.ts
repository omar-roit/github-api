import { Controller, Get, Post, Delete , Put, Body, Param
} from '@nestjs/common';
import  UserDto        from "./dto/create-user.dto";
import  User           from "./interface/user.interface";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

  constructor(private userService : UserService){}

  @Get("github/:username")
  getGithub(@Param("username") username : string): string{
    return "Github information";
  }

  @Get("cep/:address")
  getCep(@Param("address") address : string): string{
    return "Cep information";
  }

  @Post()
  createUser(@Body() user : UserDto) : User{
    return this.userService.create(user);
  }

  @Delete(":id")
  deleteUser(@Param("id") id : string): boolean{
    return this.userService.delete(parseInt(id));
  }

  @Get(":id")
  displayUser(@Param("id") id : string): User{
    return this.userService.get(parseInt(id));
  }

  @Put(":id")
  updateUser(@Body() userDto : UserDto): User{
    return this.userService.update(userDto);
  }
}