export class Course
{
    id: string = '';
    name : string = '';
    semester: string='hi' ;
    id_teachers : Array<string> = [] ;
    number_Students: number= 0;


    constructor(id: string, name:string,semester: string, id_teachers : Array<string>, numberOfStudent: number)
    {
        this.id=id;
        this.name= name;
        this.semester=semester;
        this.id_teachers =id_teachers ;
        this.number_Students=numberOfStudent;
    }


}