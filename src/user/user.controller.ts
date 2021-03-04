import { Controller, Get, Post, Delete , Put, Body, Param
} from '@nestjs/common';
import  UserDto        from "./dto/create-user.dto";
import  User           from "./interface/user.interface";
import  Address        from "./interface/address.interface";
import { UserService } from "./user.service";
import axios           from "axios";

@Controller('user')
export class UserController {

  constructor(private userService : UserService){}

  /*
   * Receives a github user account and searches the github api 
   * @param github
   * @return github response
  */
  @Get(":id/github")
  async getGithub(@Param("id") id : number): Promise<string>{
    var githubUrl = "https://api.github.com/search/users?q=";
    /* Confirm the user object already exists in the UserService */
    var user : User = this.userService.get(id);

    return await axios.get(githubUrl + user.githubAccount);
  }

  @Get(":id/cep")
  async getCep(@Param("id") id : number): Promise<String>{
    var user : User = this.userService.get(id);
    var address : Address = user.address;

    if(user != null){
      var viacepUrl = "https://viacep.com.br/ws"
      var url = `${viacepUrl}/${address.state}/${address.city}/
        ${address.street}/json`;

      return await axios.get(url);
    }else{
      return `Nothing found for ${id}`;
    }
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