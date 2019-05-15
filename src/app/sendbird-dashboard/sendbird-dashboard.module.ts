import { NgModule } from '@angular/core';
import { SendbirdDashboardComponent } from './containers/sendbird-dashboard/sendbird-dashboard.component';
import { SendbirdDashboardRoutingModule } from './sendbird-dashboard-routing.module';
import { SendbirdDashboardService } from './sendbird-dashboard.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
@NgModule({
   declarations: [SendbirdDashboardComponent],
  imports: [
    SendbirdDashboardRoutingModule
  ],
  providers: [SendbirdDashboardService, CanActivateRouteGuard],
  exports: [ SendbirdDashboardComponent ]

})
export class SendbirdDashboardModule { }
