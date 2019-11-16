import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {TopbarComponent} from './layout/topbar/topbar.component';
import {SharedModule} from '../shared/shared.module';
import { NavItemComponent } from './layout/nav-item/nav-item.component';


@NgModule({
  declarations: [LayoutComponent, TopbarComponent, NavItemComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule {
}
