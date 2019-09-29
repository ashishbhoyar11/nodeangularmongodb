import { Component, OnInit } from '@angular/core';
import { ContestService } from '../../services/contest.service';

@Component({
  selector: 'app-friendscontest',
  templateUrl: './friendscontest.component.html',
  styleUrls: ['./friendscontest.component.css']
})
export class FriendscontestComponent implements OnInit {

  userdata:any; 
  friendContestData:any;
  constructor(public service:ContestService) 
  { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userData'));

    console.log('userdata.isFriends '+ this.userdata.isFriends);
    var friendId=this.userdata.isFriends;
    this.service.friendContest(friendId).subscribe((data:any)=>{
        this.friendContestData=data;
        console.log(this.friendContestData);
    },(err)=>{
        console.log(err);
    })
  }

}
