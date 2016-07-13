import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {SignupFactory} from './signup.service';
import 'rxjs/add/operator/map';

@Component({
	selector: 'as-form-results',
  templateUrl: 'app/form-results/form-results.html',
	directives: [CORE_DIRECTIVES],
	providers: [SignupFactory]
})

export class FormResultsComponent {
	signups: Array<any>;

	constructor(private _signupFactory: SignupFactory) {
    this.signups = [];

		this._signupFactory.getAll().subscribe(
	    data => { 
	    	this.signups = data
	    }
	  );
	}
}
