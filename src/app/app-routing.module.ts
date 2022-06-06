import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
import { AuthenticationGuard } from './helpers/AuthenticationGuard';

import { StudentDetailComponent } from './components/student-detail/student-detail.component';

const routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthenticationGuard],

    children: [
      { path: '', component: IndexComponent },
      {
        path: 'school',
        component: SchoolComponent,
      },
      {
        path: 'director',
        component: DirectorComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'teachers',
        component: TeachersComponent,
      },
      {
        path: 'parents',
        component: ParentsComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'stastistic',
        component: StastisticComponent,
      },
      {
        path: 'student_detail',
        component: StudentDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule {}
