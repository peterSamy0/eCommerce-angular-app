import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

const routes : Routes = [
  { 
    path: '', 
    redirectTo: 'products', 
    pathMatch: 'full'
   },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registeration',
    component: RegisterationComponent
  },
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'Cart',
    component: CartComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
