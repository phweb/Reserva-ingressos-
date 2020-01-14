
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { AppComponent } from "./app.component";

import { AppService } from "./app.service";
import { MoviesService } from './shared/service/moviedb.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [AppService, MoviesService],
  bootstrap: [AppComponent],

})
export class AppModule {}
