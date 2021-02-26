import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClassRoutingModule } from './class-routing.module';
import { ClassWorkComponent } from './class-work/class-work.component';
import { ClassComponent } from './class.component';
import { MeetingRoomComponent } from './meeting-room/meeting-room.component';
import { PeopleComponent } from './people/people.component';
import { RequestComponent } from './request/request.component';
import { StreamComponent } from './stream/stream.component';

const components = [
  ClassWorkComponent,
  MeetingRoomComponent,
  PeopleComponent,
  RequestComponent,
  StreamComponent,
  ClassComponent,
];

const modules = [CommonModule, ClassRoutingModule];

@NgModule({
  imports: modules,
  declarations: components,
})
export class ClassModule {}
