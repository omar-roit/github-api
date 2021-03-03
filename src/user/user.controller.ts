import { Controller, Get, Post, Delete , Put
} from '@nestjs/common';
import { User } from "./interfaces/user.interface";

@Controller('user')
export class UserController {
  @Post()
  createUser(): string{
    return "User created";
  }

  @Delete()
  deleteUser(): string{
    return "User deletes";
  }

  @Get()
  displayUser(): string{
    return "User";
  }

  @Put()
  updateUser(): string{
    return "Updated";
  }

  @Get("github")
  getGithub(): string{
    return "Github information";
  }

  @Get("cep")
  getCep(): string{
    return "Cep information"
  }
}