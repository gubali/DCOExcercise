import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ClassReactiveValidationComponent } from './form-component/class-reactive-validation/class-reactive-validation.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    ClassReactiveValidationComponent,
    LeftNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
