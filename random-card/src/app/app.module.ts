import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// http module
import {HttpClientModule} from "@angular/common/http";

// for toaster
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr";

// font awesome
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
