import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './home/classes/classes.component';
import { ClassComponent } from './home/class/class.component';
import { StreamComponent } from './home/class/stream/stream.component';
import { ClassWorkComponent } from './home/class/class-work/class-work.component';
import { PeopleComponent } from './home/class/people/people.component';

const routes: Routes = [
  { path: '',component: HomeComponent, 
    children: [
      {path:'',component:ClassesComponent},
      {path:'class/:classId',component:ClassComponent,children:[
        {path:'',pathMatch:'full',redirectTo:'stream'},
        {path:'stream',component:StreamComponent},
        {path:'class-work',component:ClassWorkComponent},
        {path:'people',component:PeopleComponent},
      ]}
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
