import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'as-footer',
    templateUrl: 'app/footer/footer.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
export class FooterComponent {
    @Input() brand: string;
}
