import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BackendApiService } from '../services/backend-api.service';
import { Router,ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  errorMsg:any;
  constructor(
    public service:BackendApiService,
    private router:Router
  ) { }

  ngOnInit() {

    this.loginForm=new FormGroup({
        email:new FormControl("",[Validators.required,Validators.email]),
        password:new FormControl("",[Validators.required])
    })
  }

  login()
  {
    if(this.loginForm.valid)
    {
      var loginData={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      console.log(loginData);
      this.service.loginUser(loginData).subscribe((data:any)=>{
        console.log("After Register"+JSON.stringify(data))
        if(data.auth)
        {
          localStorage.setItem('userToken', data.token);
          localStorage.setItem('userData', JSON.stringify(data.userData));
          this.router.navigate(['admin/dashbord']);
        }
       }, (err) => {
        console.log("Error : "+ JSON.stringify(err));
        
        if(!err.error.auth)
        {
          this.errorMsg='Incorrect Username and Password!';
        }else{
          this.errorMsg=err.error.message;
        }
      })
    }
  }

}
