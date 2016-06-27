import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
		selector: 'as-styleguide',
    templateUrl: 'app/styleguide/styleguide.html',
    directives: [CORE_DIRECTIVES]
})
export class StyleguideComponent implements OnInit {
	private group: string;

    ngOnInit() {
			this.group = "all";
    }
}
