import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthGuard } from './auth/auth.guard';
import { ContestComponent } from './contest/contest.component';
import { ContestlistComponent } from './contestlist/contestlist.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendscontestComponent } from './friendscontest/friendscontest.component';

const routes: Routes = [
  {
  path:'admin',
    children:[
      { path:'dashbord',component:DashbordComponent,canActivate: [AuthGuard]},
      { path:'contest',component:ContestComponent,canActivate: [AuthGuard]},
      { path:'contestList',component:ContestlistComponent,canActivate: [AuthGuard]},
      { path:'friends',component:FriendsComponent,canActivate: [AuthGuard]},
      { path:'friendsContest',component:FriendscontestComponent,canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
