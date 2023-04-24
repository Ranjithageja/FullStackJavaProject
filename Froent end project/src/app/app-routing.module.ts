import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusManagementDetailsComponent } from './bus-management-details/bus-management-details.component';
import { BusManagementListComponent } from './bus-management-list/bus-management-list.component';
import { CreateBusManagementComponent } from './create-bus-management/create-bus-management.component';
import { UpdateBusManagementComponent } from './update-bus-management/update-bus-management.component';
import { LoginComponent } from './login/login.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { LogoutComponent } from './logout/logout.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuardService } from './auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BusseatsComponent } from './busseats/busseats.component';

const routes: Routes = 
[
{path: 'busManagements', component: BusManagementListComponent,canActivate:[AuthGuardService] },
{path: 'create-busManagement', component: CreateBusManagementComponent,canActivate:[AuthGuardService] },
{path: '', redirectTo: 'homepage', pathMatch: 'full'},
{path: 'update-busManagement/:busId', component: UpdateBusManagementComponent,canActivate:[AuthGuardService] },
{path: 'busManagement-details/:busId', component: BusManagementDetailsComponent,canActivate:[AuthGuardService] },
{path:'homepage', component: HomepageComponent},
{path:'login', component: LoginComponent},
{path:'registrationform', component: RegistrationformComponent,canActivate:[AuthGuardService] },
{path:'logout', component: LogoutComponent},
{path:'feedback', component: FeedbackComponent},
{path:'forgotpassword', component: ForgotpasswordComponent },
{path:'resetpassword', component: ResetpasswordComponent},
{path:'profilecard', component: ProfilecardComponent,canActivate:[AuthGuardService] },
{path:'busseats/:busId', component:BusseatsComponent,canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
