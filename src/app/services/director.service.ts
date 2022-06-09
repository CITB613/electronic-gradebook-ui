import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Director } from '../models/director.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor() { }
  
  getDirectorInfor()
  {
    return new Director('id', 'Director', 123, 'email')
  }
  
}
