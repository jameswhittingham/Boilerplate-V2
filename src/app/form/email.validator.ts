import {Directive, Provider, forwardRef} from '@angular/core';
import {NG_VALIDATORS, Validator, Control} from '@angular/common';
 
const MY_EMAIL_VALIDATOR = new Provider(NG_VALIDATORS, {useExisting: forwardRef(() => EmailValidator), multi: true});
 
@Directive({
  selector: '[my-email-validator]',
  providers: [MY_EMAIL_VALIDATOR]
})
export class EmailValidator implements Validator {
    constructor(){}
    validate(c: Control): {[key: string]: any} {
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailReg.test(c.value) ? null : {'emailValidation':'email is invalid.'};
    }
}