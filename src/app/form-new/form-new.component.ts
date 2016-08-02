import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {Http} from '@angular/http';
import {CustomValidators} from './form.validators';

import {User} from './user';
import {SignupFactory} from './signup.service';

@Component({
  selector: 'as-form-new',
  templateUrl: 'app/form-new/form-new.html',
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [SignupFactory]
})
export class FormNewComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _signupFactory: SignupFactory) {}

  states = ['ACT','NSW','NT','QLD','SA','VIC','WA'];
  user = new User(null, "","","","","",null,"",false);
  submitted = false;
  formComplete = false;

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, CustomValidators.emailFormat]),
      confirmEmail: new FormControl('', [Validators.required, CustomValidators.emailFormat]),
      address1: new FormControl('', [Validators.required]),
      address2: new FormControl('', []),
      postcode: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      optIn: new FormControl('', []),
      optIn2: new FormControl('', []),
      terms: new FormControl('', [Validators.required, CustomValidators.checkboxChecked])
    }, { validator: CustomValidators.match('email', 'confirmEmail') });
  }

  onSubmit(thisUser) {

    if (!this.registrationForm.valid) { 
      this.submitted = true;
    } else {

      this._signupFactory.save(thisUser).subscribe(
        data => {
          this.formComplete = true;
          this.clearForm();
        }
      )

    }
  }

  clearForm() {
    this.submitted = false;
    this.user = new User(null, "","","","","",null,"",false);
    this.registrationForm.updateValueAndValidity()
  }
}