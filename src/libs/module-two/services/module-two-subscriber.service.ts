import { Injectable } from '@angular/core';
import { BaseSubscriber } from '../../event-channel/base-subscriber';
import { AdapterCommandTypes } from '../../event-channel/config/adapter-command-types.enum';

@Injectable({
  providedIn: 'root'
})
export class ModuleTwoSubscriberService extends BaseSubscriber {
  public addHandler(): void {
    this.subscribe(AdapterCommandTypes.UPDATE_ONE_TO_THREE, (arg: [string, string]) => {
      console.log('ModuleTwoSubscriberService, AdapterCommandTypes.UPDATE_ONE_TO_THREE');
    });
  }
}
