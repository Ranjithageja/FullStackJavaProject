import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBusManagementComponent } from './create-bus-management/create-bus-management.component';
import { BusManagementDetailsComponent } from './bus-management-details/bus-management-details.component';
import { BusManagementListComponent } from './bus-management-list/bus-management-list.component';
import { UpdateBusManagementComponent } from './update-bus-management/update-bus-management.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { LoginComponent } from './login/login.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { LogoutComponent } from './logout/logout.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BusseatsComponent } from './busseats/busseats.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBusManagementComponent,
    BusManagementDetailsComponent,
    BusManagementListComponent,
    UpdateBusManagementComponent,
    RegistrationformComponent,
    LoginComponent,
    ProfilecardComponent,
    LogoutComponent,
    FeedbackComponent,
    HomepageComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    BusseatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
