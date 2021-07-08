import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent} from './books/books.component'
import { LoginComponent} from './login/login.component'
import { AuthorsComponent} from './authors/authors.component'
import { NewbooksComponent} from './newbook/newbooks.component'
import { NewauthorsComponent} from './newauthor/newauthors.component'
import {  UpdateauthorsComponent } from "./updateauthor/updateauthors.component";
import {  UpdatebooksComponent } from "./updatebook/updatebooks.component";
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {path:"admin",component:AdminComponent},
    {path:'addauthor', 
    canActivate: [AuthGuard],
    component: NewauthorsComponent,
    },
    {path:'addbook',
    canActivate: [AuthGuard],
    component: NewbooksComponent,
    },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"books",component:BooksComponent},
  {path:"authors",component:AuthorsComponent},
  {
    path:'updatebook',
    component:UpdatebooksComponent
  },
  {
    path:'updateauthor',
    component:UpdateauthorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
