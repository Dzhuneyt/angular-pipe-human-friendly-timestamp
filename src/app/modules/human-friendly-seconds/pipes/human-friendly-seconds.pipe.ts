import {Pipe, PipeTransform} from '@angular/core';
import * as prettyMs from 'pretty-ms';

@Pipe({
  name: 'secondsHumanFriendly',
})
export class HumanFriendlySecondsPipe implements PipeTransform {

  transform(seconds: any) {
    return prettyMs(seconds * 1000);
  }
}
