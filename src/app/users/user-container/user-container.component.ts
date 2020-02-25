import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  currentuser: UserModel;
  arrayUser:UserModel[];
  
  constructor() { }

  ngOnInit(): void {
    console.log("the user container init!!!")
    this.currentuser = new UserModel();

  }

  saveuserData(emailValue: string, nameValue: string) {
    this.currentuser.email = emailValue;
    this.currentuser.username = nameValue;
  }
}
