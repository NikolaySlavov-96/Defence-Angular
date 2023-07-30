import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { peroductService } from 'src/app/api/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  oldProduct = {
    articul: '',
    img: '',
    mark: '',
    model: '',
    release: '',
    description: '',
    _id: ''
  };

  constructor(private router: Router, private activateRouter: ActivatedRoute, private productService: peroductService) {
    this.oldProduct = this.activateRouter.snapshot.data?.['product'][0];
    console.log(this.oldProduct);
  }

  editHandler(form: NgForm) {
    console.log(form.value)
    if (form.invalid) { return }
    this.productService.editProduct(form.value, this.oldProduct._id).subscribe(p =>
      this.router.navigate(['/product/catalog']));
  }
}
