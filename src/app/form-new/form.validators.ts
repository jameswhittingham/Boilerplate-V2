import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Injector} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

export class CustomValidators{

  static emailFormat(control: FormControl): ValidationResult {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { "incorrectMailFormat": true };
    }
    return null;
  }

  static match(firstStringKey: string, secondStringKey: string) {
	  return (group: FormGroup): {[key: string]: any} => {
	    let firstString = group.controls[firstStringKey];
	    let secondString = group.controls[secondStringKey];

	    if (firstString.value !== secondString.value) {
	      return {
	        mismatchedStrings: true
	      };
	    }
	  }
	}

	static checkboxChecked(control: FormControl): ValidationResult {
		if (!control.value) {
			return { 'checkboxValidation': true };
		} 
		return null;
	}
}

interface ValidationResult {
    [key: string]: boolean;
}