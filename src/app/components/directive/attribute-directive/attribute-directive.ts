import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css'
})
export class AttributeDirective {

  div1BgColor: string = 'bg-primary';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
studentList: any[] = [
    {studId:12, totalMarks:42, gender: 'male', name: 'AAA', city: 'Pune', isActive: true},
    {studId:22, totalMarks:65, gender: 'male', name: 'BBBB', city: 'Mumbai', isActive: false},
    {studId:32, totalMarks:49, gender: 'female', name: 'CCC', city: 'Jalgao', isActive: true},
    {studId:42, totalMarks:99, gender: 'male', name: 'DDD', city: 'Mumbai', isActive: false},
    {studId:52, totalMarks:54, gender: 'female', name: 'EEE', city: 'Nagpur', isActive: false},
    {studId:62, totalMarks:75, gender: 'male', name: 'FFF', city: 'Thane', isActive: true},
  ]



  addRedClass() {
    this.div1BgColor = "bg-danger"
  }

  addBlueClass(){
    this.div1BgColor = "bg-primary"
  }

  toggleDiv2Class(){
    this.isDiv2Active = ! this.isDiv2Active;
  }

}
