import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import { NavbarComponent } from './shared/includes/navbar/navbar.component';
import { FormComponent } from './views/home/form/form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFormComponent } from './views/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalDateTimePipe,
    NavbarComponent,
    FormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LocalDateTimePipe,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
