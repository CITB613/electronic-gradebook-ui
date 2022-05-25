export class School 
{
    private _id : string ;
    private _name : string;
    private _address: string ;
    private _phoneNumber : number;
     constructor(id : string, name : string, address : string, phoneNumber : number)
     {
         this._id=id, this._name=name, this._address= address, this._phoneNumber=phoneNumber

     }
       
     public get id() : string {
         return this._id
     }
     
     public set id(id : string)  {
          this._id = id
     }
     public get name() : string {
         return this._name
     }
     
     public set name(name : string)  {
          this.name = name
     }
     public get address() : string {
         return this._address
     }
     
     public set address(address : string)  {
          this._address = address
     }
     public get phoneNumber() : number {
         return this._phoneNumber
     }
     
     public set phoneNumber(phoneNumber : number)  {
          this._phoneNumber = phoneNumber
     }

     

}