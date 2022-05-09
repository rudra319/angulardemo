import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registerForm!:FormGroup;
  constructor(private fb: FormBuilder) { }
  isTrue = false;
  gender = '';
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'username': [null, [Validators.required, Validators.pattern]],
      'mobile': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      'pwd': [null],
      'gender': [this.isTrue ? 'male': 'female'],
      'terms':[null]
    });
  }
  submitForm(){
    console.log(this.registerForm.controls['mobile'].errors);
  }
  get controls(){
    return this.registerForm.controls;
  }
  setValidation(){
    if(this.controls['username'].valid){
      this.controls['pwd'].setValidators(Validators.required);
      this.controls['pwd'].setErrors({abc: true});
      //this.controls['pwd'].patchValue('asd');
    }
  }

}
