import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserEducateComponent } from './user-educate/user-educate.component';
import { UserIncidentComponent } from './user-incident/user-incident.component';
import { IncidentformComponent } from './incidentform/incidentform.component';
import { UserPollsComponent } from './user-polls/user-polls.component';
import { UserViewsComponent } from './user-views/user-views.component';
import { GovdashboardComponent } from './govdashboard/govdashboard.component';
import { GovincidentComponent } from './govincident/govincident.component';
import { GovpollsComponent } from './govpolls/govpolls.component';
import { GovpollsresultsComponent } from './govpollsresults/govpollsresults.component';
import { GovcreatepollComponent } from './govcreatepoll/govcreatepoll.component';
import { GovviewsComponent } from './govviews/govviews.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminusermanagementComponent } from './adminusermanagement/adminusermanagement.component';
import { AdminuserapprovalComponent } from './adminuserapproval/adminuserapproval.component';

export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'forgotpassword', component:ForgotpasswordComponent},
    {path:'resetpassword', component:ResetpasswordComponent},
    {path:'userdashboard', component:UserdashboardComponent},
    {path:'user-educate', component:UserEducateComponent},
    {path:'user-incident', component:UserIncidentComponent},
    {path:'incidentform', component:IncidentformComponent},
    {path:'user-polls', component:UserPollsComponent},
    {path:'user-views', component:UserViewsComponent},
    {path:'govdashboard', component:GovdashboardComponent},
    {path:'govincident', component:GovincidentComponent},
    {path:'govpolls', component:GovpollsComponent},
    {path:'govpollsresults', component:GovpollsresultsComponent},
    {path:'govcreatepoll', component:GovcreatepollComponent},
    {path:'govviews', component:GovviewsComponent},
    {path:'admindashboard', component:AdmindashboardComponent},
    {path:'adminusermanagement', component:AdminusermanagementComponent},
    {path:'adminuserapproval', component:AdminuserapprovalComponent},
];
