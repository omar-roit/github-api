import { Injectable } from '@nestjs/common';
import CreateUserDto  from "./dto/create-user.dto";
import User           from "./interface/user.interface";

@Injectable()
export class UserService {

  private userList : User[];

  create(userDto : CreateUserDto) : User{
    var user = this.userList.find((el, i)=>{
      // Use githubAccount to avoid duplicating users
      if(userDto.githubAccount === el.githubAccount){
        return true;
      }
    });
    if(!user){
      this.userList.push(userDto);
      console.log(`Created user ${userDto.name}`);
    }else{
      console.log(`User ${userDto.name} already exists`);
    }
    return userDto;
  }

  update(userDto: CreateUserDto) : User{
    var foundIndex = -1;

    this.userList.find((el, i)=>{
      if(el.id === userDto.id){
        foundIndex = i;
        // To confirm that the user has an id.
        userDto.id = this.userList[i].id;
        this.userList[i] = userDto;
        return true;
      }
    });
    return this.userList[foundIndex];
  }

  delete(userId:number): boolean{
    var foundIndex = -1;
    var user = this.userList.find((el, i)=>{
      if(el.id === userId){
        foundIndex = i;
        this.userList.splice(i, 1);
        return true;
      }
    });

    if(user != null){
      console.log(`User deleted ${userId}`);
      return true;
    }else{
      console.log(`User not found ${userId}`);
      return false;
    }
  }

  get(userId: number): User{
    return this.userList.find((el, i)=>{
      if(el.id === userId){
        return true;
      }
    });
  }
}
