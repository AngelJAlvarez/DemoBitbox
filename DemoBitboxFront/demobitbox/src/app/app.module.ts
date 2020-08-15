import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: LoginComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CheckboxModule,
    CardsModule,
    IconsModule,
    WavesModule,
    ReactiveFormsModule,
    InputsModule,
    ButtonsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
