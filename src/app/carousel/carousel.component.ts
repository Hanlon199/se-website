import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
	// images = [1,2,3,4,5,6].map(() => `includes/img/car_` + (Math.round((Math.random()*6)+1) + `.jpg`));
	images = ['includes/img/car_1.jpg','includes/img/car_2.jpg','includes/img/car_3.jpg','includes/img/car_4.jpg','includes/img/car_5.jpg','includes/img/car_6.jpg']
	ngOnInit() {
		
	}

}
