import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

  constructor(private router: Router, private apiService: ApiService) { }

  createProductHandler(form: NgForm) {
    if (form.invalid) { return }
    this.apiService.createProduct(form.value).subscribe(p => {
      this.router.navigate(['/catalog'])
    })
  }
}
