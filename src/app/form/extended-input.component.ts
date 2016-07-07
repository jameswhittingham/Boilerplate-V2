import {Component, Input, ContentChildren, QueryList, DoCheck} from "@angular/core";
import {CORE_DIRECTIVES} from "@angular/common";
import {InputError} from "./input-error.component";

@Component({
	selector: 'extended-input',
	template: `
		<div class="row vertical-center">
			<div class="col-sm-4 col-md-3 vertical-center-middle">
				<label class="control-label" attr.for="{{labelFor}}" [ngClass]="{error:isError}">{{labelText}}</label>
				<ng-content select="input-errors"></ng-content>
			</div>
			<div class="col-sm-8 col-md-9">
				<ng-content select="input"></ng-content>
			</div>
		</div>


	`,
	directives: [CORE_DIRECTIVES, InputError]
})
export class ExtendedInput {
	@Input() labelText:string = '';
	@Input() labelFor:string = '';
	@Input() isError:boolean = false;
	@ContentChildren(InputError) errors:QueryList<InputError>;

	/*ngDoCheck():void {
		if (this.errors) {
			this.errors.toArray().forEach(
				(error:QaInputError, i:number) => {
					if (i == 0) {
						error.showError();
					} else {
						error.hideError();
					}
				}
			);
		}
	}*/
}