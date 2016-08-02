import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {TodoFactory} from './todos.service';
import 'rxjs/add/operator/map';

@Component({
	selector: 'as-todo',
	templateUrl: 'app/todo/todo.html',
	directives: [TOOLTIP_DIRECTIVES,CORE_DIRECTIVES],
	providers: [TodoFactory]
})

export class TodoComponent {
 
  todos: Array<any>;

  constructor(private _todoFactory: TodoFactory) {
    this.todos = [];

		this._todoFactory.getAll().subscribe(
	    data => { 
	    	this.todos = data
	    }
	  );
	}

  addTodo($event, todoText) {
    if($event.which === 13) {
      var _todo = {
        text : todoText.value,
        isCompleted : false
      };

      this._todoFactory.save(_todo).subscribe(
	      data => {
	        this.todos.push(data);
	        todoText.value = '';
      	}
      )
    }
  }

  updateTodoText($event, todo){
  	if($event.which === 13){
  		todo.text = $event.target.value;
      var _todo = {
        _id : todo._id,
        text : todo.text ,
        isCompleted : todo.isCompleted
      };
     
      this._todoFactory.update(_todo).subscribe(
	      data => {
	        this.setEditState(todo, false);
      	}
      );
  	}
  }

  updateStatus(todo){
     var _todo = {
        _id : todo._id,
        text : todo.text ,
        isCompleted : !todo.isCompleted
      };

      this._todoFactory.update(_todo).subscribe(
	      data => {
         todo.isCompleted = !todo.isCompleted; 
      });
  	
  }

  deleteTodo(todo){
    var todos = this.todos;

  	this._todoFactory.delete(todo._id).subscribe(
	      data => {
         if(data.n == 1){
          for (var i = 0; i < todos.length; i++) {
            if(todos[i]._id == todo._id){
              todos.splice(i, 1);
            }
          };

         }
      });
  }

  setEditState(todo, state){
  	if(state){
  	  	todo.isEditMode = state;
  	} else {
  		delete todo.isEditMode;
  	}
  }
}