import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SendbirdDashboardComponent } from './containers/sendbird-dashboard/sendbird-dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { SendbirdDashboardRoutingModule } from './sendbird-dashboard-routing.module';
import { SendbirdDashboardService } from './sendbird-dashboard.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
@NgModule({
  declarations: [SendbirdDashboardComponent, UserLoginComponent, ChatPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SendbirdDashboardRoutingModule
  ],
  providers: [SendbirdDashboardService, CanActivateRouteGuard],
  exports: [ SendbirdDashboardComponent ]

})
export class SendbirdDashboardModule { }
