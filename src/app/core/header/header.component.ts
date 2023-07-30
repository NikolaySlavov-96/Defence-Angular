import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLoggedIn() {
    return this.authService.isLogged;
  };

  get user() {
    return this.authService.user;
  }
  
  constructor(private router: Router, private authService: AuthService) { }

}
