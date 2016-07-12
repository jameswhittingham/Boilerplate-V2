import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
 
@Injectable()
export class TodoFactory {
 
  constructor(private http:Http) { }
 
  getAll() {
    return Promise.resolve(this.http.get('/api/v1/todos'));
  }

  get(id){
  	return this.http.get('/api/v1/todo/'+id);
  }

  save(todo){
  	return this.http.post('/api/v1/todo', todo);
  }

  update(todo){
  	return this.http.put('/api/v1/todo/'+todo._id, todo);
  }

  delete(id){
  	return this.http.delete('/api/v1/todo/'+id);
  }

}