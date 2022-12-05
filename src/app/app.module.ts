import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { AllcomponentComponent } from './allcomponent/allcomponent.component';
import { NavBarComponent } from './allcomponent/nav-bar/nav-bar.component';
import { HomeComponent } from './allcomponent/home/home.component';
import { LoginComponent } from './allcomponent/login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './allcomponent/dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './allcomponent/registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptorInterceptor } from './services/auth-interceptor.interceptor';
import { SidebarComponent } from './allcomponent/sidebar/sidebar.component';
import { PropertyComponent } from './allcomponent/property/property.component';
import { AddownerprooertyComponent } from './allcomponent/addownerprooerty/addownerprooerty.component';
import { UserdashboardComponent } from './allcomponent/userdashboard/userdashboard.component';

import { ManageownerpropertyComponent } from './allcomponent/manageownerproperty/manageownerproperty.component';
import { UpdateownerpropertyComponent } from './allcomponent/updateownerproperty/updateownerproperty.component';
import { ShowImageDialogComponent } from './allcomponent/show-image-dialog/show-image-dialog.component';
import { ViewDetailsComponent } from './allcomponent/view-details/view-details.component';
import { ForbiddenComponent } from './allcomponent/forbidden/forbidden.component';
//import { DragDirective } from './drag.directive';
@NgModule({
  declarations: [
    AppComponent,
    AllcomponentComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    SidebarComponent,
    PropertyComponent,
    HomeComponent,
    AddownerprooertyComponent,
    UserdashboardComponent,
  
    ManageownerpropertyComponent,
       UpdateownerpropertyComponent,
       ShowImageDialogComponent,
       ViewDetailsComponent,
       ForbiddenComponent,
   // DragDirective
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    LoginService,
    AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptorInterceptor,
    multi:true,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
