import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {
  name: string = '';
  email: string = '';
  salary: number | null = null;

  addEmployee() {
    console.log('Employee Added:', {
      name: this.name,
      email: this.email,
      salary: this.salary
    });
    alert('Employee Added Successfully ✅');
    this.name = '';
    this.email = '';
    this.salary = null;
  }
}