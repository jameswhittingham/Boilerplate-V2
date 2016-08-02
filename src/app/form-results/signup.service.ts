import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class SignupFactory {
 
  constructor(private http:Http) { }
 
  getAll() {
    return this.http.get('/api/v1/signups').map((res:Response) => res.json()); 
  }
}