import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  isAuthenticating = true;

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    // this.authService.get
  }
}
