import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class SignupFactory {
 
  constructor(private http:Http) { }
 
  save(signup){
  	return this.http.post('/api/v1/signup', signup).map((res:Response) => res.json()); 
  }
}