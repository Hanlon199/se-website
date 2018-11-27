import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
	faculty:any;
	faculty2:any;
  constructor() { 
  	this.faculty = [{"name": "Stefan Christov, PhD", "title":"Assistant Professor of Software Engineering", "email": "Stefan.Christov@quinnipiac.edu", "info": "BS, SUNY College Brockport; MS,PhD, University of MassachusettsAmherst", "img":"includes/img/christov.png"}, {"name":"name here","title":"title here", "email":"email@qu.edu","info":"info here"},{"name":"name here","title":"title here", "email":"email@qu.edu","info":"info here"}]
  	this.faculty2 = [{"name":"name here","title":"title here", "email":"email@qu.edu","info":"info here"},{"name":"name here","title":"title here", "email":"email@qu.edu","info":"info here"},{"name":"name here","title":"title here", "email":"email@qu.edu","info":"info here"}]
  }

  ngOnInit() {
  }

}
