import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './about/company/company.component';
import { EmployeeComponent } from './about/employee/employee.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
const routes: Routes = [
  {path: '', 'component': HomeComponent},
  {path: 'contact-us', 'component': ContactUsComponent},
  {
    path: 'about', 
    component: AboutComponent,
    children: [
      {path: 'company', component: CompanyComponent},
      {path:'employee', component:EmployeeComponent}
    ]
  },
  {path:'forgot-pwd', component: ForgotPasswordComponent},
  {path:'user/:id/:uid', component: UserComponent},
  {path: 'admin', loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'template-form', component: TemplateDrivenFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
