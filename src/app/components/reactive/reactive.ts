import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.html',
  styleUrl: './reactive.css'
})
export class Reactive {

  studentForm : FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    userName: new FormControl(),
    city : new FormControl(),
    state : new FormControl(),
    zipCode : new FormControl(),
    isAcceptTerms : new FormControl()
  });

  formvalue: any;

  onSave() {
    this.formvalue = this.studentForm.value;
    
  }
  
  resetForm() {
  this.studentForm.reset(); 
  //this.formvalue = null; 
}


}
