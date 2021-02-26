import { AuthenticationModule } from './authentication/authentication.module';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { HeaderComponent } from './common/header/header.component';
import { MaterialModule } from './Material/Material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ClassCardComponent } from './home/classes/class-card/class-card.component';
import { ClassComponent } from './home/class/class.component';
import { ClassesComponent } from './home/classes/classes.component';
import { StreamComponent } from './home/class/stream/stream.component';
import { ClassWorkComponent } from './home/class/class-work/class-work.component';
import { PeopleComponent } from './home/class/people/people.component';
import { WriteDialogComponent } from './home/class/stream/writeDialog/writeDialog.component';
import { NotificationComponent } from './home/class/stream/notification/notification.component';
import { RequestComponent } from './home/class/request/request.component';
import { AssignmentComponent } from './home/class/class-work/assignment/assignment.component';
import { LinkComponent } from './home/class/utilDialog/link/link.component';
import { FileUploadComponent } from './home/class/utilDialog/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    HomeComponent,
    HeaderComponent,
    ClassCardComponent,
    // ClassComponent,
    ClassesComponent,
    // StreamComponent,
    // ClassWorkComponent,
    // PeopleComponent,
    // WriteDialogComponent,
    // NotificationComponent,
    // RequestComponent,
    // AssignmentComponent,
    // LinkComponent,
    // FileUploadComponent,
  ],
  entryComponents: [
    WriteDialogComponent,
    NotificationComponent,
    AssignmentComponent,
    LinkComponent,
    FileUploadComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
