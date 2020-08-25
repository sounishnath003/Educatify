import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './home/classes/classes.component';
import { ClassComponent } from './home/class/class.component';

const routes: Routes = [
  { path: '',component: HomeComponent, 
    children: [
      {path:'',component:ClassesComponent},
      {path:'class/:classId',component:ClassComponent}
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
