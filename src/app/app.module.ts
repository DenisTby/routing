import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewActivitiesComponent } from './view-activities/view-activities.component';
import { ManageNotificationComponent } from './manage-notification/manage-notification.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import {FormsModule}  from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ViewActivitiesComponent,
    ManageNotificationComponent,
    EditProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
