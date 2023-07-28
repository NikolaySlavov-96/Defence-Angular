import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLoggedIn() {
    return false;
  }

  get user() {
    return { name: 'Nikolay' }
  }

  constructor(private router: Router) { }
}
