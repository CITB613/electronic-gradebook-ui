// export class School {
//   private _id: string;
//   private _name: string;
//   private _address: string;

import { DirectorType } from "./director.model";

//   constructor(id: string, name: string, address: string) {
//     (this._id = id), (this._name = name), (this._address = address);
//   }

//   public get id(): string {
//     return this._id;
//   }

//   public set id(id: string) {
//     this._id = id;
//   }
//   public get name(): string {
//     return this._name;
//   }

//   public set name(name: string) {
//     this.name = name;
//   }
//   public get address(): string {
//     return this._address;
//   }

//   public set address(address: string) {
//     this._address = address;
//   }
// }

export type School = {
  id: string;
  name: string;
  address: string;
  principal: DirectorType
};
