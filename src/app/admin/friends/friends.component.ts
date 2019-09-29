import { Component, OnInit } from '@angular/core';
import { ContestService } from '../../services/contest.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList:any;
  userdata:any;
  friendsListArray: Array<any> = [];
  constructor(public service:ContestService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userData'));

    console.log(this.userdata.isFriends);
    
    this.service.getFriends().subscribe((result:any)=>{
      result.data.forEach(friends => {
        var friendsSearch = this.userdata.isFriends.indexOf(friends._id);
        console.log('indexOf : '+ friendsSearch + '  '+ friends._id);
        if(friendsSearch===-1)
        {
          this.friendsListArray.push(
            {
              email:friends.email,
              name:friends.name,
              _id:friends._id,
              isFriend:false,
            }
          );
        }else{
          this.friendsListArray.push(
            {
              email:friends.email,
              name:friends.name,
              _id:friends._id,
              isFriend:true,
            }
          );
        }
      });
      console.log(this.friendsListArray);
      this.friendsList=this.friendsListArray;
      // this.friendsList=result.data;
    },(err)=>{
      console.log(err);
    });
  }

  AddFriend(fId)
  {
      if(fId)
      {
        console.log('fId : '+fId+ '  userdata :' +this.userdata._id);
        this.service.addFriend(fId,this.userdata._id).subscribe((data:any)=>{
            console.log(data);
            alert(data.message);
        },(err)=>{ 
            console.log(err);
        })
      }
  }

}
