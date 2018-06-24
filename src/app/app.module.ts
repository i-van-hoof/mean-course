import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostsService } from './posts/posts.service';
import { HeaderComponent } from './header/header.component';
import { PostListComponent} from './posts/post-list/post-list.component';

import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,

  ],
  providers: [ PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
