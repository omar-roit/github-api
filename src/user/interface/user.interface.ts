import Address from "./address.interface";
export default interface User{
  id :number;
  name: string;
  age: number;
  githubAccount: string;
  address: Address; 
}