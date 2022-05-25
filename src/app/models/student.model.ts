import { User } from "./user.model";

export class Student{
    user: User = new User('stu', 1, 'stu', '00-12-12', 'user','pass', '', 0 );
    
    constructor(user : User)
    {
        
        this.user= user
    }

}