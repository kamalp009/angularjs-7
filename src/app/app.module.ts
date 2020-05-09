import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormDataService } from './data/formData.service';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './jwt.interceptor';
import { UsersService } from './users.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { SuvidhaaComponent } from './suvidhaa/suvidhaa.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InfoComponent } from './dashboard/info/info.component';
import { AddressComponent } from './dashboard/address/address.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { ClaimsComponent } from './dashboard/claims/claims.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './suvidhaa/navbar/navbar.component';
import { BasicinfoComponent } from './suvidhaa/basicinfo/basicinfo.component';
import { PolicydetailsComponent } from './suvidhaa/policydetails/policydetails.component';
import { PaypolicyComponent } from './suvidhaa/paypolicy/paypolicy.component';
import { GetpolicyComponent } from './suvidhaa/getpolicy/getpolicy.component';
import { WorkflowService } from './suvidhaa/workflow/workflow.service';
import { WorkflowGuard } from './suvidhaa/workflow/workflow-guard.service';

const appRoutes: Routes = [
  { path: '',redirectTo:'whyshuvidha',pathMatch:'full'},
  { path: 'whyshuvidha',
    children:[ 
        {path: '',component: SuvidhaaComponent},
        {path:'basicinfo',component: BasicinfoComponent,outlet: "sidebar"},
        {path:'policydetails',component: PolicydetailsComponent,outlet: "sidebar",canActivate: [WorkflowGuard]},
        {path:'paypolicy',component: PaypolicyComponent,outlet: "sidebar",canActivate: [WorkflowGuard] },
        {path:'getpolicy',component: GetpolicyComponent,outlet: "sidebar",canActivate: [WorkflowGuard] }
      ]
      
  },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',
    children:[ 
      {path: '',component: DashboardComponent},
      {path:'info',component: InfoComponent},
      {path:'address',component: AddressComponent},
      {path:'orders',component: OrdersComponent},
      {path:'claims',component: ClaimsComponent}
    ],
    canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: '**', component:PageNotFoundComponent}
 //{ path: 'whyshuvidha', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ServicesComponent,
    SuvidhaaComponent,
    AboutusComponent,
    ContactusComponent,
    PageNotFoundComponent,
    NavbarComponent,
    BasicinfoComponent,
    PolicydetailsComponent,
    PaypolicyComponent,
    GetpolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },UsersService,{ provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService },WorkflowGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
