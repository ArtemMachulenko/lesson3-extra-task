import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import {RouterModule} from "@angular/router";
import { AllUsersComponent } from './components/all-users/all-users.component';

const routers = [
  {path: 'users', component: UserComponent},
  {path: 'users/:id', component: AllUsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

