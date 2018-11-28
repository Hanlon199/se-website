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
  	this.faculty = [
    {"name": "Stefan Christov, PhD", "title":"Assistant Professor of Software Engineering", "email": "Stefan.Christov@quinnipiac.edu", "info": "BS,SUNY College Brockport; MS,PhD, University of MassachusettsAmherst", "img":"includes/img/christov.png"}, 
    {"name":"Ruby ElKharboutly, PhD","title":"Assistant Professor of Software Engineering", "email":"Ruby.ElKharboutly@quinnipiac.edu","info":"BS, MS, American University in Cairo; PhD, University of Connecticut", "img":"includes/img/ruby.png"},
    {"name":"name here","title":"title here", "email":"email@qu.edu","info":"info here", "img":"includes/img/placeholder.png"}]
  	this.faculty2 = [
    {"name":"Jonathan Blake, PhD","title":"Program Director & Professor of Computer Science and Software Engineering","email":"Jonathan.Blake@quinnipiac.edu","info":"BSE, Princeton University; MS, PhD, Northwestern University","img":"includes/img/blake.png"},
    {"name":"Mark Hoffman, PhD","title":"Professor of Computer Science and Software Engineering", "email":"Mark.Hoffman@quinnipiac.edu","info":"BS, MS, University of New Haven; PhD, Polytechnic University Brooklyn" ,"img":"includes/img/hoffman.png"},
    {"name":"name here","title":"title here", "email":"email@qu.edu","info":"info here", "img":"includes/img/placeholder.png"}]
  }

  ngOnInit() {
  }

}
