import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParserComponent } from './component/parser.component';
import { FreightCalculator } from './services/freightCalculator';


@NgModule({
  declarations: [
    AppComponent,
    ParserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [FreightCalculator],
  bootstrap: [AppComponent]
})
export class AppModule { }
