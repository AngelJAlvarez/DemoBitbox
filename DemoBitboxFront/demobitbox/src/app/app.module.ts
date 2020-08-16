import { AlertService } from './../service/alertService/alert.service';
import { LoginService } from './../service/loginService/login.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptorService } from 'src/service/interceptors/auth-interceptor.service';
import { ItemService } from 'src/service/itemService/item.service';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ItemInfoComponent } from './item-info/item-info.component';





const appRoutes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: LoginComponent
  },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UserPanelComponent },
      { path: 'moreInfo', component: ItemInfoComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserPanelComponent,
    ItemInfoComponent,

  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [LoginService, ItemService, AlertService,
    {
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
