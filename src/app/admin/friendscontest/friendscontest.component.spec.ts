import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendscontestComponent } from './friendscontest.component';

describe('FriendscontestComponent', () => {
  let component: FriendscontestComponent;
  let fixture: ComponentFixture<FriendscontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendscontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendscontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
