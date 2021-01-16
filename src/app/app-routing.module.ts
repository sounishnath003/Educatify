import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './home/classes/classes.component';
import { ClassComponent } from './home/class/class.component';
import { StreamComponent } from './home/class/stream/stream.component';
import { ClassWorkComponent } from './home/class/class-work/class-work.component';
import { PeopleComponent } from './home/class/people/people.component';
import { RequestComponent } from './home/class/request/request.component';
import { MeetingRoomComponent } from './home/class/meeting-room/meeting-room.component';

const routes: Routes = [
  {
    path: 'users/classes/:isAuth',
    component: HomeComponent,
    // redirectTo: ''
  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./authentication/authentication.module').then(
  //       (m) => m.AuthenticationModule
  //     ),
  // },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ClassesComponent },
      {
        path: 'class/:classId',
        component: ClassComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'stream' },
          { path: 'stream', component: StreamComponent },
          { path: 'class-work', component: ClassWorkComponent },
          { path: 'people', component: PeopleComponent },
          { path: 'request', component: RequestComponent },
          { path: 'meeting', component: MeetingRoomComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
