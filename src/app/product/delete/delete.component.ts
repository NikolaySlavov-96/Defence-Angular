import { Component, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { ProductService } from 'src/app/api/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  product = {
    owner: '',
    _id: '',
    articul: '',
    mark: '',
    model: '',
  }

  user = {
    id: '',
  }

  constructor(private activateRouter: ActivatedRoute, private productService: ProductService, private router: Router, private injector: Injector) {
    this.product = this.activateRouter.snapshot.data?.['product'][0];
    const userDate = injector.get(AuthService);
    this.user.id = userDate?.user?._id!;
  }


  deleteHandler() {
    if (this.product.owner !== this.user.id) { return }
    this.productService.deleteProduct(this.product._id, {}).subscribe(p => {
      this.router.navigate(['/'])
    });
  }
}
