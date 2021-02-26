import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassWorkComponent } from './class-work/class-work.component';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';
import { PeopleComponent } from './people/people.component';
import { RequestComponent } from './request/request.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'stream' },
  { path: 'stream', component: StreamComponent },
  { path: 'class-work', component: ClassWorkComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'request', component: RequestComponent },
  { path: 'meeting', component: MeetingRoomComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassRoutingModule {}
