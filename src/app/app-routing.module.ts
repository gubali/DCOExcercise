import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassReactiveValidationComponent } from "../app/form-component/class-reactive-validation/class-reactive-validation.component";
import { FormComponentComponent } from "../app/form-component/form-component.component";

const routes: Routes = [
{path:'formControls', component:FormComponentComponent},
{path:'classFormControls', component:ClassReactiveValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
