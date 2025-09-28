import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  //string, number, boolean, date

  courseName: string = "Angular 18";

  username: string = "Santosh";

  inputType = "checkbox";

  myClassName: string = "bg-primary";

  rollNo: number = 123;

  isIndian: boolean = false;

  currentDate: Date = new Date();

  isSaving = false;

  constructor() {

    
  }

  showAlert(message : string) {
    alert(message)
  }

}
