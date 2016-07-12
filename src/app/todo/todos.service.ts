import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class TodoFactory {
 
  constructor(private http:Http) { }
 
  getAll() {
    return this.http.get('/api/v1/todos').map((res:Response) => res.json()); 
  }

  get(id){
  	return this.http.get('/api/v1/todo/'+id).map((res:Response) => res.json()); 
  }

  save(todo){
  	return this.http.post('/api/v1/todo', todo).map((res:Response) => res.json()); 
  }

  update(todo){
  	return this.http.put('/api/v1/todo/'+todo._id, todo).map((res:Response) => res.json()); 
  }

  delete(id){
  	return this.http.delete('/api/v1/todo/'+id).map((res:Response) => res.json()); 
  }

}