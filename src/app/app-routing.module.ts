import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { WinelistComponent } from './components/winelist/winelist.component';

const routes: Routes = [
  {path:"",component:SearchbarComponent},
  {path:"",component:WinelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
