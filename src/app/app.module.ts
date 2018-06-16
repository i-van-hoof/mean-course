import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostsService } from './posts/posts.service';
import { HeaderComponent } from './header/header.component';
import { PostListComponent} from './posts/post-list/post-list.component';

import { MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule,  MatExpansionModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [ PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
