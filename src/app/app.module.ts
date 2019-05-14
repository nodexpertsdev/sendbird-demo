import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SendbirdDashboardModule} from './sendbird-dashboard/sendbird-dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SendbirdDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
