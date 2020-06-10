import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ManageNotificationComponent } from './manage-notification/manage-notification.component';
import { ViewActivitiesComponent } from './view-activities/view-activities.component';

import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent, children:[
    {path: '', component:EditProfileComponent},
    {path:'viewActivities', component:ViewActivitiesComponent},
    {path:'notification', component:ManageNotificationComponent},
    {path:'profileEdit', component:EditProfileComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
