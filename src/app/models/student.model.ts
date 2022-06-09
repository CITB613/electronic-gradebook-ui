import { User } from "./user.model";

export class Student{
    id: string ='  ';
    name : string= ' ';
    id_class : string = ' ';


    
    constructor(id : string, name : string, id_class : string)
    {
        
        this.id= id;
        this.name=name;
        this.id_class = id_class
    }

}