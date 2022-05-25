export class User
{
    public _id : string ;
    public _role : number;
    public _name :string;
    public _dateOfBirth: string;
    public _userName:string;
    public _password : string;
    public _email: string;
    public _phoneNumber : number;
    constructor(id : string, role: number, name: string,dateOfBirth : string, userName : string, password : string, email : string, phoneNumber : number)
    {
        this._id=id;
        this._role=role;
        this._name=name;
        this._dateOfBirth=dateOfBirth;
        this._userName=userName,
        this._password=password,
        this._email=email,
        this._phoneNumber=phoneNumber
    }
}