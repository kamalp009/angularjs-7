import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  users:{}
  company:string
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getById(2).pipe(first()).subscribe(users => {   
      this.users = users['ad']; 
      this.company = this.users['company']
      console.log("users--",this.users)
    });
  }

}
