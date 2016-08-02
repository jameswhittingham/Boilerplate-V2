import {Component} from "@angular/core";
import {CORE_DIRECTIVES} from "@angular/common";

@Component({
	selector: 'input-error',
	template: `<span *ngIf="showErrorFlag" class="error-message"><ng-content></ng-content></span>`,
	directives: [CORE_DIRECTIVES]
})
export class InputError {

	showErrorFlag:boolean = true;

	hideError():void {
		this.showErrorFlag = false;
	}

	showError():void {
		this.showErrorFlag = true;
	}

}