import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'item', component: ItemListComponent },
  { path: 'cart', component: CartComponent},
  { path: 'user', component: UserComponent},
  { path: '', redirectTo: 'item', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
