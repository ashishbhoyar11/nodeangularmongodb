import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContestService {
  httpOptions:any;
  constructor(private http:HttpClient) 
  { 
    let token = localStorage.getItem('userToken');
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'x-access-token':token
      })
    };
  }

  userContestAdd(contData)
  {
    return this.http.post('http://localhost:3000/create_contest',contData,this.httpOptions);
  }

  userContestAll(userid)
  {
    return this.http.get('http://localhost:3000/get_contest/'+userid,this.httpOptions);
  }

  userContestDelete(delId)
  {
    return this.http.delete('http://localhost:3000/delete_contest/'+delId,this.httpOptions);
  }
  singleContestData(editId)
  {
    return this.http.get('http://localhost:3000/get_single_contest/'+editId,this.httpOptions);
  }
  userContestUpdate(contData,conId)
  {
    return this.http.post('http://localhost:3000/update_contest/'+conId,contData,this.httpOptions);
  }

  getFriends()
  {
    return this.http.get('http://localhost:3000/registerUsers',this.httpOptions);
  }
  addFriend(fId,userId)
  {
    return this.http.post('http://localhost:3000/addFriends/'+userId,{id:fId},this.httpOptions);
  }

  friendContest(friendsArr)
  {
    console.log('friendsArr : '+friendsArr);
    return this.http.post('http://localhost:3000/get_friends_contest',{ strArr: friendsArr },this.httpOptions);
  }
}
