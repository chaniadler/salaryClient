import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.scss']
})
export class SalaryCalculatorComponent {
  formData: any = {
    employmentFraction: '100',
    professionalLevel: ProfessionalLevel.Beginner,
    managementLevel: ManagementLevel.None,
    yearsOfExperience: null,
    eligibleForLawAddition: 'no',
    groupMembership: null
  };
  
  calculatedSalary: any = {};
  showResults: boolean = false;
  ProfessionalLevel = ProfessionalLevel;
  ManagementLevel = ManagementLevel;
  LawBonusGroup = LawBonusGroup;

  constructor(private http: HttpClient) {}

  calculateSalary() {
    this.http.post<any>('https://localhost:44360/salary/calculate', this.formData).subscribe(
      (response) => {
        this.calculatedSalary = response;
        this.showResults = true;
        console.log(response); // For debugging purposes, to see what data is returned
      },
      (error) => {
        console.error('Error calculating salary:', error);
      }
    );
  }
}

export enum ProfessionalLevel {
  Beginner,
  Experienced
}

export enum ManagementLevel {
  None,
  Level1,
  Level2,
  Level3,
  Level4
}

export enum LawBonusGroup {
  GroupA,
  GroupB
}
