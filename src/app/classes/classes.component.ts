import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
	year:any = 1;
	Class:any = 'CSC110';
	freshmenYear = ['CSC110', 'CSC111'];
	SophomoreYear = ['CSC215', 'SER...'];
	juniorYear = ['SER330', 'SER315'];
	seniorYear = ['SER...', 'SER...', 'SER...'];
  classInfo = [{"name":"CSC110","info":"csc110 info here"},{"name":"CSC111","info":"CSC111 info here"},{"name":"CSC215","info":"CSC215 info here"},{"name":"...","info":"... info here"}]
  classSelected:any;
  classes:any = this.freshmenYear;
  constructor() { }

  ngOnInit() {
  }

  showYear(num:any){
  	console.log(num);
  	this.year = num;
  	this.classes = num == 1? this.freshmenYear:num==2?this.SophomoreYear:num==3?this.juniorYear:this.seniorYear;
  }

  showClass(num:any){
  	this.Class = num;
  }

  showInfo(type:any){
  	console.log(this.classInfo[0]);
    this.classSelected = this.classInfo[type];
  }






}
