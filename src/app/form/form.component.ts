import {Component, OnInit, Input, ChangeDetectionStrategy, Directive} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, AbstractControl, ControlGroup, Validators, Control} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {EmailValidator, CheckboxValidator, MatchValidator, CustomValidators} from './form.validators';

import {ExtendedInput} from "./extended-input.component"
import {InputError} from "./input-error.component";
import {User} from './user';
import {SignupFactory} from './signup.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'as-form',
  templateUrl: 'app/form/form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, EmailValidator, CheckboxValidator, MatchValidator, ExtendedInput, InputError],
  providers: [SignupFactory]
})
export class FormComponent implements OnInit {
	constructor(private formBuilder:FormBuilder, private _signupFactory: SignupFactory) {}

	someFormHandle:ControlGroup;
  email:AbstractControl;
  confirmEmail:AbstractControl;

	states = ['ACT','NSW','NT','QLD','SA','VIC','WA'];
	user = new User(null, "","","","","",null,"",false);

	submitted = false;
	emailRegEx = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';


	divisibleByTen(control:Control) {
    return parseInt(control.value) % 10 == 0 ? null : {
      divisibleByTen: true
    }
  }

	ngOnInit():void {
		this.email = new Control('email', Validators.compose([Validators.required, CustomValidators.emailFormat]));
		this.confirmEmail = new Control('confirmEmail', Validators.compose([Validators.required, CustomValidators.emailFormat]));

		this.someFormHandle = this.formBuilder.group({
		  'email': this.email,
		  'confirmEmail': this.confirmEmail
		}, { validator: CustomValidators.match('email', 'confirmEmail') })
  }

	onSubmit(valid, thisUser) {
		if (!valid) { 
			this.submitted = true;
		} else {


      this._signupFactory.save(thisUser).subscribe(
	      data => {
	      	debugger
	        //this.todos.push(data);
	        //todoText.value = '';
      	}
      )

		}
	}
}
