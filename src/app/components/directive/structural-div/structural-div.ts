import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-div',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-div.html',
  styleUrl: './structural-div.css'
})
export class StructuralDiv {

  isDiv1Visiable: boolean = true;

  isDiv2Visiable: boolean = false;

  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  
  studentList: any[] = [
    {studId:12, gender: 'male', name: 'AAA', city: 'Pune', isActive: false},
    {studId:22, gender: 'male', name: 'BBBB', city: 'Mumbai', isActive: false},
    {studId:32, gender: 'female', name: 'CCC', city: 'Jalgao', isActive: false},
    {studId:42, gender: 'male', name: 'DDD', city: 'Mumbai', isActive: false},
    {studId:52, gender: 'female', name: 'EEE', city: 'Nagpur', isActive: false},
    {studId:62, gender: 'male', name: 'FFF', city: 'Thane', isActive: true},
  ]

  showDiv1() {
    this.isDiv1Visiable = true;
  }

  hideDev1(){
    this.isDiv1Visiable = false;
  }

  toggleDev2(){
    this.isDiv2Visiable = !this.isDiv2Visiable;
  }
}
