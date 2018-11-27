import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accolades',
  templateUrl: './accolades.component.html',
  styleUrls: ['./accolades.component.css']
})
export class AccoladesComponent implements OnInit {
	view:any;
	info:any;
	infoArr:any;
  constructor() { 
  	this.infoArr = [{"name":"name here", "info": "info here", "img":"includes/img/placeholder.png"},{"name":"name here", "info": "info here", "img":"includes/img/placeholder.png"},{"name":"QU Hackathon", "info": "info here", "img":"includes/img/hackathon.png"}]
  	this.view = 0;
  	this.info = this.infoArr[0];
  }

  ngOnInit() {
  }

  viewInfo(num:any){
  	this.view = num;
  	this.info = this.infoArr[num]
  }

}
