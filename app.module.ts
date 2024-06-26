import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { provideHttpClient, withFetch } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    provideClientHydration(),
provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
