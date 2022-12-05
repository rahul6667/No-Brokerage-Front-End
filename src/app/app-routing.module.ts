import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './allcomponent/dashboard/dashboard.component';

import { UserdashboardComponent } from './allcomponent/userdashboard/userdashboard.component';
import { HomeComponent } from './allcomponent/home/home.component';
import { LoginComponent } from './allcomponent/login/login.component';
import { RegistrationComponent } from './allcomponent/registration/registration.component';
import { AuthGuard } from './services/auth.guard';
import { AddownerprooertyComponent } from './allcomponent/addownerprooerty/addownerprooerty.component';
import { ManageownerpropertyComponent } from './allcomponent/manageownerproperty/manageownerproperty.component';
import { UpdateownerpropertyComponent}  from './allcomponent/updateownerproperty/updateownerproperty.component';
import { ResolverService } from './services/resolver.service';
import { ViewDetailsComponent}  from './allcomponent/view-details/view-details.component';
import { ForbiddenComponent}  from './allcomponent/forbidden/forbidden.component';

const routes: Routes = [
  {
    path:"forbidden",
    component:ForbiddenComponent,
    pathMatch:'full',
   // canActivate:[AuthGuard],
   
    },
  {
    path:"view-details",
    component:ViewDetailsComponent,
    pathMatch:'full',
    canActivate:[AuthGuard],data:{roles:'USER'},
    resolve:{
      ownerproperty:ResolverService
    }
    },
  {
    path:"updateownerproperty",
    component:UpdateownerpropertyComponent,
    pathMatch:'full',
    canActivate:[AuthGuard],data:{roles:'OWENER'},
    resolve:{
      ownerproperty:ResolverService
    }
   
    },{
    path:"manageownerproperty",
    component:ManageownerpropertyComponent,
    pathMatch:'full',
    canActivate:[AuthGuard],data:{roles:'OWENER'}
   
    },
  {
    path:"addownerprooerty",
    component:AddownerprooertyComponent,
    pathMatch:'full',
    canActivate:[AuthGuard],data:{roles:'OWENER'}
   
    },
  {
    path:"registration",
    component:RegistrationComponent,
    pathMatch:'full',
   
    },
{

  path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{
path:"login",
component:LoginComponent,
pathMatch:'full'
},
{
  path:"dashboard",
  component:DashboardComponent,
  pathMatch:'full',
  canActivate:[AuthGuard],data:{roles:'OWENER'}

}
,
{
  path:"userdashboard",
  component:UserdashboardComponent,
  pathMatch:'full',
  canActivate:[AuthGuard],data:{roles:'USER'}

}
,



{

  path:'registration',
  component:RegistrationComponent,
  pathMatch:'full'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
