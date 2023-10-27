import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: "", redirectTo: 'user', pathMatch: "full" },
  { path: "login", component : LoginComponent},
  { path: "register", component : RegisterComponent},
  { path: 'user', loadChildren: () => import('./User/Models/user.module').then(m => m.UserModule) },
  { path: 'vendor', loadChildren: () => import('./Vendor/Models/vendor.module').then(m => m.VendorModule) },

  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
