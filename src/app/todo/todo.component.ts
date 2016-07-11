import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	selector: 'as-todo',
	templateUrl: 'app/todo/todo.html',
	directives: [TOOLTIP_DIRECTIVES,CORE_DIRECTIVES]
})
export class TodoComponent implements OnInit {
	private group: string;
	private todos;

	ngOnInit() {
		this.group = "all";

		this.todos = ['1234'];
	}
}