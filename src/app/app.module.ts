import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { AccoladesComponent } from './accolades/accolades.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentsComponent } from './students/students.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'accolades', component: AccoladesComponent},
  {path: 'faculty', component: FacultyComponent},
  {path: 'students', component: StudentsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent,
    AccoladesComponent,
    FacultyComponent,
    StudentsComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
