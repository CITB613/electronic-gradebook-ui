import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemEditorService {


  public itemsToEdit : Array<any> = [];

  constructor() { }

  getItemsToEdit(users :any[] ) {
    this.itemsToEdit= [] ;
    users.forEach( (value) => { this.itemsToEdit.push({item :value, edit: false}  ) } )
    return this.itemsToEdit ;
  }
}
