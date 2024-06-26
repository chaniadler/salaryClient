import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';

export const routes: Routes = [
  { path: 'salary-calculator', component: SalaryCalculatorComponent },
  { path: '', redirectTo: 'salary-calculator', pathMatch:'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
