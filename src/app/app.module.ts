import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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

import { ClassComponent } from './components/class/class.component';
import { ClassInforComponent } from './components/class-infor/class-infor.component';
import { routes } from './app.route';
import { ClassService } from './services/class.service';
import { TeacherService } from './services/teacher.service';
import { ParentService } from './services/parent.service';
import { SchoolListComponent } from './components/school-list/school-list.component';

import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/HttpRequestInterceptop';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AuthenticationGuard } from './helpers/AuthenticationGuard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    StudentDetailComponent,
    ClassComponent,
    ClassInforComponent,
    SchoolListComponent,
    CourseListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SchoolService,
    DirectorService,
    UserService,
    CoursesService,
    ClassService,
    TeacherService,
    ParentService,
    AuthenticationGuard,
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
