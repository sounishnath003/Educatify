import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../Material/Material.module';
import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
  declarations: [HomeComponent],
  providers: [AuthService],
})
export class HomeModule {}
