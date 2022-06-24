import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';

const routes: Routes = [{path:'./',component:AppComponent},{path:'HomePage',component:HomepageComponent},
{path:'StudentDetails',component:StudentDetailsComponent},
{path:'TeacherDetails',component:TeacherDetailsComponent},
{path:'Contact',component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
