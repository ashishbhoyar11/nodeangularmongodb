import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: {};
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    var uData=localStorage.getItem('userData');
    var uToken=localStorage.getItem('userToken');
    console.log(uData);
    this.userData=JSON.parse(uData);
  }

  logout()
  {
    console.log('logout');
    localStorage.removeItem('userData');
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }

}
