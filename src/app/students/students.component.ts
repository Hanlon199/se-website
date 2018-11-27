import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
	students: any;
  constructor() {
  	this.students = [{"name":"....", "info":"..."},{"name":"....", "info":"..."},{"name":"....", "info":"..."},{"name":"....", "info":"..."}]
  }

  ngOnInit() {
  }

}
