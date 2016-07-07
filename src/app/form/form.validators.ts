import {Directive, Provider, forwardRef, Input} from '@angular/core';
import {NG_VALIDATORS, Validator, Control, AbstractControl, ControlGroup} from '@angular/common';

import {ValidatorFn} from '@angular/common/src/forms-deprecated/directives/validators';

const EMAIL_VALIDATOR = new Provider(NG_VALIDATORS, {useExisting: forwardRef(() => EmailValidator), multi: true});

@Directive({
	selector: '[email-validator]',
	providers: [EMAIL_VALIDATOR]
})
export class EmailValidator implements Validator {
	constructor(){}
	validate(c: Control): {[key: string]: any} {
		var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailReg.test(c.value) ? null : {'emailValidation':'email is invalid.'};
	}
}

const CHECKBOX_VALIDATOR = new Provider(NG_VALIDATORS, {useExisting: forwardRef(() => CheckboxValidator), multi: true});

@Directive({
	selector: '[checkbox-validator]',
	providers: [CHECKBOX_VALIDATOR]
})
export class CheckboxValidator implements Validator {
	constructor(){}
	validate(c: Control): {[key: string]: any} {
		return c.value ? null : {'checkboxValidation':'checkbox is invalid.'};
	}
}

const MATCH_VALIDATOR = new Provider(NG_VALIDATORS, {useExisting: forwardRef(() => MatchValidator), multi: true});

@Directive({
	selector: '[match-validator]',
	providers: [MATCH_VALIDATOR]
})
export class MatchValidator implements Validator {
	@Input() item;

	constructor(){}
	validate(c: Control): {[key: string]: any} {
		var match = this.item == c.value;
		return match ? null : {'matchValidation':'match is invalid.'};
	}
}

export class CustomValidators {
  static emailFormat(control: Control): {[key: string]: boolean} {
    let pattern:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(control.value) ? null : {"emailFormat": true};
  }

  static match(firstStringKey: string, secondStringKey: string) {
	  return (group: ControlGroup): {[key: string]: any} => {
	    let firstString = group.controls[firstStringKey];
	    let secondString = group.controls[secondStringKey];

	    if (firstString.value !== secondString.value) {
	      return {
	        mismatchedStrings: true
	      };
	    }
	  }
	}
}