import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ContestService } from '../../services/contest.service';
import { Router,ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {

  contestForm:FormGroup;
  filedata:any;
  userdata:any;
  constructor( public services:ContestService, private router:Router) { }

  ngOnInit() {

    this.userdata=JSON.parse(localStorage.getItem('userData'));

    this.contestForm=new FormGroup({
        title:new FormControl("",[Validators.required]),
        desc:new FormControl("",[Validators.required]),
        img:new FormControl("",[Validators.required]),
        date:new FormControl("",[Validators.required])
    })
  }

  fileEvent(e){
    this.filedata=e.target.files[0];
    console.log(e);
  }

  contactFormAdd()
  {
    if(this.contestForm.valid){

      const formData = new FormData();
      formData.append('title', this.contestForm.value.title);
      formData.append('content', this.contestForm.value.desc);
      formData.append('date', this.contestForm.value.date);
      formData.append('image', this.filedata);
      formData.append('userid', this.userdata._id);

          formData.forEach((value,key) => {
            console.log(key+" "+value)
          });

       this.services.userContestAdd(formData).subscribe((data:any)=>{
        console.log(JSON.stringify(data));
        this.router.navigate(['/admin/contestList']);
       },(err)=>{
          console.log(err);
       })   
    }
  }

}
