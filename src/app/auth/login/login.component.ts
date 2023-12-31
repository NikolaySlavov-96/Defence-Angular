import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  loginHandler(form: NgForm) {
    if (form.invalid) { return }
    this.authService.login(form.value).subscribe(u => {
      this.router.navigate(['/product/catalog']);
    })
  }
}
