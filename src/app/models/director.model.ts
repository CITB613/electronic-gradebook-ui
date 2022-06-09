
import { User } from "./user.model";
export class Director {

    id : string = '' ;
    name: string = 'directorName';
    phone:number = 0;
    email : string = " email";
    constructor(id : string, name: string, phone : number, email: string)
    {
        this.id =id;
        this.name =name;
        this.phone = phone; 
        this.email= email;
    }

}