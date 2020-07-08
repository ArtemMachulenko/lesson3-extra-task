import { Component, OnInit } from '@angular/core';
import {UserDemo} from "../../models/UserDemo";
import {UserService} from "../../services/users/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserDemo[];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit(): void {
  }

}
