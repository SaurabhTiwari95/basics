import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerForm = new FormGroup(
    {
      fName : new FormControl('',Validators.required),
      lName : new FormControl('',Validators.required),
      mobile : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
    }
  )

  onSubmit=()=>{
    console.log(this.registerForm.value);
  }

  
}
