import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicRoutingModule} from './public-routing.module';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import { RegisterUserComponent } from './register-user/register-user.component';


@NgModule({
  declarations: [LoginComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule {
}
