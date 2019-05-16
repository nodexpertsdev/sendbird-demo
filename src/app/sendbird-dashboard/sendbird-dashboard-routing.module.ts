import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { UserListComponent } from './components/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: UserLoginComponent },
  {path: 'chat', component: ChatPageComponent, canActivate: [CanActivateRouteGuard] },
  {path: 'chat/userlist', component: UserListComponent },
  {path: '**', component: UserLoginComponent }
];

@NgModule({
  declarations: [ UserLoginComponent, ChatPageComponent, UserListComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SendbirdDashboardRoutingModule { }
