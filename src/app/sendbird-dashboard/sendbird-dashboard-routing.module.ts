import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';

const routes: Routes = [
  {path: '', component: UserLoginComponent },
  {path: 'chat', component: ChatPageComponent, canActivate: [CanActivateRouteGuard] },
  {path: '**', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SendbirdDashboardRoutingModule { }
