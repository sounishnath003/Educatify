import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { ClassComponent } from './class/class.component';
import { StreamComponent } from './class/stream/stream.component';
import { ClassWorkComponent } from './class/class-work/class-work.component';
import { PeopleComponent } from './class/people/people.component';
import { RequestComponent } from './class/request/request.component';
import { MeetingRoomComponent } from './class/meeting-room/meeting-room.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ClassesComponent },
      {
        path: 'class/:classId',
        component: ClassComponent,
        loadChildren: import('./class/class.module').then((m) => m.ClassModule),
        // children: [
        //   { path: '', pathMatch: 'full', redirectTo: 'stream' },
        //   { path: 'stream', component: StreamComponent },
        //   { path: 'class-work', component: ClassWorkComponent },
        //   { path: 'people', component: PeopleComponent },
        //   { path: 'request', component: RequestComponent },
        //   { path: 'meeting', component: MeetingRoomComponent },
        // ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
