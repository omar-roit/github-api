import { Controller, Get, Post, Delete , Put, Body, Param
} from '@nestjs/common';
import  UserDto  from "./dto/create-user.dto";

@Controller('user')
export class UserController {
  @Post()
  createUser(@Body() user : UserDto) : string{
    return "User created";
  }

  @Delete(":id")
  deleteUser(@Param("id") id : string): string{
    return `Deleting user ${id}`;
  }

  @Get(":id")
  displayUser(@Param("id") id : string): string{
    return `Displaying user ${id}`;
  }

  @Put(":id")
  updateUser(@Param("id") id : string): string{
    return `Updating user ${id}`;
  }

  @Get("github/:username")
  getGithub(@Param("username") username : string): string{
    return "Github information";
  }

  @Get("cep/:address")
  getCep(@Param("address") address : string): string{
    return "Cep information";
  }
}