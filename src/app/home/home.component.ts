import {Component, OnInit} from '@angular/core';
import {Tool} from './tool';
import {HomeService} from './home.service';

@Component({
	selector: 'as-home',
	templateUrl: 'app/home/home.html'
})
export class HomeComponent implements OnInit {
  private myname: string;
	tools: Tool[] = [];

  constructor(private homeService: HomeService) {
    this.myname = 'Simple';
  }

	ngOnInit() {
    this.homeService.getTools()
			.then(tools => this.tools = tools);
  }
}