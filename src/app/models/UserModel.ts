import { Info } from './Info';

export class UserModel{
    constructor( public id:number = 5,
     
    public username:string= "john_dggg",
    public email:string = "john.doe@gmail.comggg",
    public info:Info =new Info()
  
    ){}
}