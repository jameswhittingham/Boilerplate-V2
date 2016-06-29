import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	selector: 'as-styleguide',
	templateUrl: 'app/styleguide/styleguide.html',
	directives: [TOOLTIP_DIRECTIVES,CORE_DIRECTIVES]
})
export class StyleguideComponent implements OnInit {
	private group: string;

	ngOnInit() {
		this.group = "all";
	}
}