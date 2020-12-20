import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { ClassComponent } from './class/class.component';
import { StreamComponent } from './class/stream/stream.component';
import { ClassWorkComponent } from './class/class-work/class-work.component';
import { PeopleComponent } from './class/people/people.component';
import { RequestComponent } from './class/request/request.component';

const routes: Routes = [
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
        ],
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
