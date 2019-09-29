import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BackendApiService } from '../services/backend-api.service';
import { Router,ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  errorMsg:any;
  constructor(
    public service:BackendApiService,
    private router:Router
  ) { }

  ngOnInit() {
    this.registerForm=new FormGroup({
      name : new FormControl("",[Validators.required]),
      email : new FormControl("",[Validators.required,Validators.email]),
      password : new FormControl("",[Validators.required,Validators.minLength(5)])
    });
  }

  registerUser()
  {
    if(this.registerForm.valid) {
      
      var registerData={
        name:this.registerForm.value.name,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }
      
      this.service.registerUser(registerData).subscribe((data:any)=>{
        // console.log("After Register"+JSON.stringify(data))
        if(data.status)
        {
          this.errorMsg='Ragistered Successfully !';
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);  //1s
        }
       }, (err) => {
        console.log("Error : "+ JSON.stringify(err));
        this.errorMsg=err.error.message;
      })
    }
  }

}
