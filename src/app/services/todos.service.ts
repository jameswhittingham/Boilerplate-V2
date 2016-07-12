import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
 
@Injectable()
export class TodoFactory {
 
  constructor(private http:Http) { }
 
  getAll() {
    return Promise.resolve(this.http.get('/api/v1/todos'));
  }

}

/*import {$http} from 'xhr-factory';

export const TodoFactory = {
 
  getAll :function(){
  	return $http.get('/api/v1/todos');
  },

  get:function(id){
  	return $http.get('/api/v1/todo/'+id);
  },

  save: function(todo){
  	return $http.post('/api/v1/todo', todo);
  },

  update: function(todo){
  	return $http.put('/api/v1/todo/'+todo._id, todo);
  },

  delete: function(id){
  	return $http.delete('/api/v1/todo/'+id);
  }

};)*/