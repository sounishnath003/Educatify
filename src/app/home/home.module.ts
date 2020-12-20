import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { MaterialModule } from "../Material/Material.module";


@NgModule({
    imports: [ CommonModule, HomeRoutingModule, MaterialModule ],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {}