import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HumanFriendlySecondsModule} from './modules/human-friendly-seconds/human-friendly-seconds.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HumanFriendlySecondsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
