import Address from "../interface/address.interface";

export default class CreateUserDto{

  id :number;
  name: string;
  age: number;
  githubAccount: string;
  address: Address;   
}