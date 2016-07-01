import {Component, Input, ChangeDetectionStrategy, Directive} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {EmailValidator, CheckboxValidator} from './form.validators';

import {User} from './user';

@Component({
  selector: 'as-form',
  templateUrl: 'app/form/form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, EmailValidator, CheckboxValidator]
})
export class FormComponent {
	states = ['ACT','NSW','NT','QLD','SA','VIC','WA'];

	user = User;

	submitted = false;

	onSubmit() { this.submitted = true; }
}
