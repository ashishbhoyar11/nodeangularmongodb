import { Component, OnInit } from '@angular/core';
import { ContestService } from '../../services/contest.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-contestlist',
  templateUrl: './contestlist.component.html',
  styleUrls: ['./contestlist.component.css']
})
export class ContestlistComponent implements OnInit {

  userdata:any;
  userContestData:any;
  contestRecord:any;
  updataContest:FormGroup;
  userDate:any;
  conImage:any;
  filedata:any;
  constructor(public services:ContestService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userData'));
    this.allContest(this.userdata);

    this.updataContest=new FormGroup({
      title:new FormControl("",[Validators.required]),
      desc:new FormControl("",[Validators.required]),
      img:new FormControl("",[]),
      date:new FormControl("",[Validators.required])
    })
    this.contestRecord={};
  }

  allContest(userDetails)
  {
    this.services.userContestAll(userDetails._id).subscribe((data:any)=>{
  
      this.userContestData=data;
      console.log(this.userContestData);
    },(err)=>{
        console.log(err);
    })

  }

  deleteContest(delId,conName)
  {
    if(confirm("Are you sure to delete "+conName+" Contest")) 
    {
      this.services.userContestDelete(delId).subscribe((data:any)=>{
        console.log(data);
        this.allContest(this.userdata);
      },(err)=>{
        console.log(err);
      })
    }
  }

  editContestRecord(conId)
  {
    this.contestRecord={};
    if(conId)
    {
       this.services.singleContestData(conId).subscribe((data:any)=>{
         console.log(data);
          this.contestRecord=data;
         // this.userDate=this.stringAsDate(this.contestRecord.date);
          this.userDate = new Date(this.contestRecord.date).toISOString().split('T')[0];
          this.conImage="";
          console.log('userDate : '+this.userDate);
          $("#myModal").modal('show');
       },(err)=>{ 
          console.log(err);
       })
    }
  }

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

  fileEvent(e){
    this.filedata=e.target.files[0];
    console.log(this.filedata);
  }

  updateNewContest(conId)
  {
    if(this.updataContest.valid)
    {
      const formData = new FormData();
      formData.append('title', this.updataContest.value.title);
      formData.append('content', this.updataContest.value.desc);
      formData.append('date', this.updataContest.value.date);
      formData.append('image', this.filedata);

          formData.forEach((value,key) => {
            console.log(key+" "+value)
          });

        this.services.userContestUpdate(formData,conId).subscribe((data:any)=>{
          if(data.status)
          {
            console.log(data);
            this.allContest(this.userdata);
            $("#myModal").modal('hide');
          }
        },(err)=>{
          console.log(err);
        })  
    } 
  }

}
