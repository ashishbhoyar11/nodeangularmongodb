import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContestComponent } from './contest/contest.component';
import { ContestService } from '../services/contest.service';
import { ContestlistComponent } from './contestlist/contestlist.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendscontestComponent } from './friendscontest/friendscontest.component';


@NgModule({
  declarations: [
    DashbordComponent, 
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent, 
    ContestComponent, ContestlistComponent, FriendsComponent, FriendscontestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContestService
  ],
  exports:[
    DashbordComponent
  ]
})
export class AdminModule { }
