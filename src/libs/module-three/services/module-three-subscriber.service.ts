import { Injectable } from '@angular/core';
import { BaseSubscriber } from '../../event-channel/base-subscriber';
import { AdapterCommandTypes } from '../../event-channel/config/adapter-command-types.enum';

@Injectable({
  providedIn: 'root'
})
export class ModuleThreeSubscriberService extends BaseSubscriber {
  public addHandler(): void {
    this.subscribe(AdapterCommandTypes.UPDATE_ONE_TO_TWO, (arg: [number, number]) => {
      console.log('ModuleThreeSubscriberService, AdapterCommandTypes.UPDATE_ONE_TO_TWO');
    });
  }
}
