import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { NewbooksComponent } from './newbook/newbooks.component';
import { UpdatebooksComponent } from './updatebook/updatebooks.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewauthorsComponent } from './newauthor/newauthors.component';
import { UpdateauthorsComponent } from './updateauthor/updateauthors.component'
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';

import { AuthorserviceService } from './authorservice.service';
import { BookserviceService } from './bookservice.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NewbooksComponent,
    UpdatebooksComponent,
    AuthorsComponent,
    NewauthorsComponent,
    UpdateauthorsComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,AuthGuard,AuthorserviceService,BookserviceService,UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
