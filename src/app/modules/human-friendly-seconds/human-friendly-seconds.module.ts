import {NgModule} from '@angular/core';
import {HumanFriendlySecondsPipe} from './pipes/human-friendly-seconds.pipe';

@NgModule({
  declarations: [
    HumanFriendlySecondsPipe
  ],
  providers: [],
  exports: [
    HumanFriendlySecondsPipe
  ]
})

export class HumanFriendlySecondsModule {

}
