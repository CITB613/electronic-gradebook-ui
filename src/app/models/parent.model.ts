import { User } from "./user.model";

export class Parent 
{   
    user : User  = new User('122', 2, 'parent', '22-02-02', 'userName', 'pass', '', 0) ;
    id_student : string ='';
    name_student: string ='default';
      ;

    constructor(user : User, id: string )
    {
        this.user=user;
        this.id_student=id
        
    }

}