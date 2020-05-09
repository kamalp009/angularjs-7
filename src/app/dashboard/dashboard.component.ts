import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id: string;
  public showFirst: boolean;
  public showInfo: boolean;
  public showAddress: boolean;
  public showOrders: boolean;
  public showClaims: boolean;
  users:{};
  constructor(private router: Router,public authService: AuthService,private userService: UsersService) { this.showFirst = true;}
  

  ngOnInit(): void {
    console.log("show--",this.showFirst)
    this.id = localStorage.getItem('token');
  }
  showinfo(){
    console.log("i am in show info")
    this.showFirst = false;
    this.showInfo = true;

    this.userService.getById(2).pipe(first()).subscribe(users => { 
        
        this.users = users; 
        console.log("users--",this.users['ad'])
    });

  }

  myaddress(){
    this.showFirst = false;
    this.showAddress = true;
  }

  myorders(){
    this.showFirst = false;
    this.showOrders = true;

  }

  claims(){
    this.showFirst = false;
    this.showClaims = true;

  }

  back(){
    this.showFirst = true;
    this.showInfo = false;
    this.showAddress = false;
    this.showOrders = false;
    this.showClaims = false;
  }

  logout(): void {  
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
