import { Injectable }       from '@nestjs/common';
import { UserEntity }       from "./user.entity";
import CreateUserDto        from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DeleteResult } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo : Repository<UserEntity>
  ){}

  async insert(userDto : CreateUserDto) :Promise<UserEntity>{
    return await this.userRepo.save(userDto);
  }

  async update(userDto: CreateUserDto) : Promise<UserEntity | null>{
    const user = await this.userRepo.findOneOrFail(userDto.id);
    if(!user.id){
      console.log("User deosn't exist");
    }
    await this.userRepo.update(userDto.id, userDto);
    return await this.userRepo.findOne(userDto.id);
  }

  async delete(id:number): Promise<DeleteResult>{
    return await this.userRepo.delete(id);
  }
}
