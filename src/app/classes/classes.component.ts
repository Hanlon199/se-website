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
  classInfo = [{"name":"CSC110","img":"includes/img/csc110.png", "info":"This course serves as an introduction to computer science and computer programming. Topics include fundamental programming constructs; problem-solving techniques; basic data and control structures; testing; debugging; arrays; and an introduction to object-oriented programming. A lab is included."},{"name":"CSC111","img":"includes/img/csc111.png","info":"This course is a continuation of CSC 110. Topics include advanced data structures (linked lists, stacks, queues, trees, hash tables), recursion, abstract data types, introductory algorithms, and intermediate object-oriented programming. A lab is included."},{"name":"CSC215","img":"includes/img/csc215.png","info":"This course presents a study of the design and analysis of algorithms. Topics include Asymptotic Analysis, Complexity Theory, Sorting and Searching, Underlying Data Structures, Recursion, Greedy Algorithms, Divide and Conquer, Dynamic Programming, and NP-completeness. Additional topics may include Graph Algorithms, Probabilistic Algorithms, Distributed Computing and Parallel Algorithms."},{"name":"...","info":"... info here"}]
  classSelected:any;
  classes:any = this.freshmenYear;
  constructor() { 
    this.classSelected = this.classInfo[0];
  }

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
    console.log(type)
    let num = type == 'CSC110' ? 0: type == 'CSC111'? 1:2;
  	console.log(this.classInfo[0]);
    this.classSelected = this.classInfo[num];
  }






}
