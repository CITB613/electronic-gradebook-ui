export class Course
{
    id: string = '';
    name : string = '';
    semester: string='hi' ;
    id_teacher : string = '' ;
    number_Students: number= 0;


    constructor(id: string, name:string,semester: string,  id_teacher : string, numberOfStudent: number)
    {
        this.id=id;
        this.name= name;
        this.semester=semester;
        this.id_teacher=id_teacher;
        this.number_Students=numberOfStudent;
    }


}