export class Class 
{
    id: string ='';
    name : string = '';
    id_form_teacher : string = '';
    
    constructor(id: string, class_name : string, id_form_teacher : string)
    {
        this.id= id;
        this.name= class_name;
        this.id_form_teacher=id_form_teacher
    }

}