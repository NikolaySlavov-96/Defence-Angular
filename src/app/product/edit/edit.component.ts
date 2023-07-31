import { Component, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { ProductService } from 'src/app/api/product.service';

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
    _id: '',
    owner: '',
  };

  user = {
    id: '',
  };

  constructor(private router: Router, private activateRouter: ActivatedRoute, private productService: ProductService, private injector: Injector) {
    this.oldProduct = this.activateRouter.snapshot.data?.['product'][0];
    const userDate = injector.get(AuthService);
    this.user.id = userDate?.user?._id!;
  }

  editHandler(form: NgForm) {
    if (form.invalid) { return }
    if (this.user?.id !== this.oldProduct.owner) { return }
    this.productService.editProduct(form.value, this.oldProduct._id).subscribe(p =>
      this.router.navigate(['/product/catalog']));
  }
}
