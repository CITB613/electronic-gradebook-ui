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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClassComponent } from './components/class/class.component';
import { ClassInforComponent } from './components/class-infor/class-infor.component';
import { Routes } from '@angular/router';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AuthenticationGuard } from './helpers/AuthenticationGuard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LoginComponent ,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'schools',
    component: SchoolListComponent,
  },
  {
    path: 'schools/:id',
    component: ContentComponent,

    children: [
      {
        path: '',
        component: IndexComponent,
      },

      {
        path: 'school',
        component: SchoolComponent,
      },

      {
        path: 'director',
        component: DirectorComponent,
      },
      {
        path: 'classes',
        component: ClassComponent,
      },
      {
        path: 'classes/courses/:id_class',
        component: CourseListComponent,
      },
      {
        path: 'classes/:id',
        component: ClassInforComponent,
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

  //    {
  //     path:'', component : ContentComponent,

  //     children :[
  //       {path  : '',
  //        component : IndexComponent
  //       //component: SchoolListComponent
  //     },
  //       {
  //         path:'school',
  //         component: SchoolComponent
  //       },
  //       {
  //         path:'director',
  //         component: DirectorComponent
  //       },
  //       {
  //         path: 'classes',
  //         component: ClassComponent
  //       },
  //       {
  //         path: 'classes/courses/:id',
  //         component: TeachersComponent
  //       },
  //       {
  //         path: 'classes/:id',
  //         component: ClassInforComponent
  //       },

  //       {
  //         path:'courses',
  //         component: CoursesComponent
  //       },
  //       {
  //         path:'teachers',
  //         component: TeachersComponent
  //       },
  //       {
  //         path:'parents',
  //         component: ParentsComponent
  //       },
  //       {
  //         path:'students',
  //         component: StudentsComponent
  //       },
  //       {
  //         path:'users',
  //         component: UsersComponent
  //       },
  //       {
  //         path:'stastistic',
  //         component: StastisticComponent
  //       },
  //       {
  //         path:'student_detail',
  //         component: StudentDetailComponent
  //       },

  //     ]

  //   }
];
