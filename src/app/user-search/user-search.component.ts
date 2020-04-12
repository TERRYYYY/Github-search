import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  newUser = new User("", "", "", "", "","","")


  @Output()
  searchUser: EventEmitter<string> = new EventEmitter<string>()


  submitUser() {
    this.searchUser.emit(this.newUser.name);
    this.newUser = new User("", "", "","", "", "","")

  }

  constructor() { }

  ngOnInit(): void {
  }

}
