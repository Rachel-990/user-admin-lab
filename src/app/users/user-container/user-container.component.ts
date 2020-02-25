import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { USERS } from 'src/app/mocks/users.mock';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  public currentuser: UserModel;
  public arrayUser: Array<UserModel>;

  constructor() { }

  ngOnInit(): void {
    console.log("the user container init!!!")
    this.currentuser = new UserModel();
    this.arrayUser = USERS;
  }

  saveuserData(emailValue: string, nameValue: string) {
    //this.currentuser.email = emailValue;
    //this.currentuser.username = nameValue;
  }

  onUserSelected(u: UserModel) {
    this.currentuser = u;
  }
}
