import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';

import { IndexComponent } from './components/index/index.component';
import { SchoolComponent } from './components/school/school.component';
import { DirectorComponent } from './components/director/director.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentsComponent } from './components/students/students.component';
import { ParentsComponent } from './components/parents/parents.component';
import { UsersComponent } from './components/users/users.component';
import { StastisticComponent } from './components/stastistic/stastistic.component';
import { SchoolService } from './services/school.service';
import { DirectorService } from './services/director.service';
import { UserService } from './services/user.service';
import { CoursesService } from './services/courses.service';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes= [
  {path:'login', 
  component: LoginComponent,
  
} ,
 {
  path:'', component : ContentComponent,

  children :[
    {path  : '',
    component : IndexComponent},
    {
      path:'school',
      component: SchoolComponent
    },
    {
      path:'director',
      component: DirectorComponent
    },
    {
      path:'courses',
      component: CoursesComponent
    },
    {
      path:'teachers',
      component: TeachersComponent
    },
    {
      path:'parents',
      component: ParentsComponent
    },
    {
      path:'students',
      component: StudentsComponent
    },
    {
      path:'users',
      component: UsersComponent
    },
    {
      path:'stastistic',
      component: StastisticComponent
    },
    {
      path:'student_detail',
      component: StudentDetailComponent
    }



  ]

}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent, 
    FooterComponent,
    NavComponent,
    ContentComponent,
    LoginComponent,
    
    IndexComponent,
    SchoolComponent,
    DirectorComponent,
    CoursesComponent,
    TeachersComponent,
    StudentsComponent,
    ParentsComponent,
    UsersComponent,
    StastisticComponent,
    StudentDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SchoolService,
    DirectorService,
    UserService,
    CoursesService

  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
