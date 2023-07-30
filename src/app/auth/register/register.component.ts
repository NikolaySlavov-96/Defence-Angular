import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/api/auth.service';
import { sameValueGroupValidator } from 'src/app/shared/validators/same-value-group-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.formBuild.group({
    email: ['', [Validators.required]],
    username: ['', Validators.required, Validators.minLength(6)],
    pass: this.formBuild.group({
      password: ['', Validators.required, Validators.minLength(5)],
      rePassword: [],
    }, {
      validators: [sameValueGroupValidator('password', 'rePassword')]
    }),
    year: ['', Validators.minLength(1)],
  })

  constructor(private authSercice: AuthService, private router: Router, private formBuild: FormBuilder) { }

  registerHandler() {
    if (this.form.invalid) { return }
    const { email, username, pass: { password, rePassword } = {}, year } = this.form.value;
    this.authSercice.register({ email, username, password, rePassword, year }).subscribe(a => {
      this.router.navigate(['/product/catalog']);
    })
  }
}
