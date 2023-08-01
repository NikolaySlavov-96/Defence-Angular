import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { AuthenticateComponent } from './authenticate/authenticate/authenticate.component';
import { appInterceptorProvider } from './app.interceptor';
import { API_ERROR } from './shared/constants';
import { SharedModule } from './shared/shared.module';
import { BehaviorSubject } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ProductModule,
    AuthModule,
    SharedModule,
  ],
  providers: [
    appInterceptorProvider,
    {
      provide: API_ERROR,
      useValue: new BehaviorSubject(null),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
