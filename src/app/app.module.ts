import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-tj2su6gg.us.auth0.com',
      clientId: 'ChQWaT2VxDFLZtp4XKpTimnj5ALgWAQp'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
