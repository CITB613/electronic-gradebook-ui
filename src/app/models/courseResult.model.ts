export class CouresResult{
    
    id_course : string = '';
    t1 : number = 0;
    t2: number = 0;
    t0: number = 0;

    constructor(id_course:string, t1 ?: number, t2  ?: number, t0 ?:number)
    {    
        this.id_course= id_course;
        if(t1!= undefined)
        {
            this.t1=t1
        };
        if(t2!= undefined)
        {
            this.t2=t2
        }
        if(t0!= undefined )
        {
            this.t0 = t0
        }

    }
}