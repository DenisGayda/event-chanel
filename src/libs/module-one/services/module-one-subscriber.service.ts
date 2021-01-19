import { Injectable } from '@angular/core';
import { BaseSubscriber } from '../../event-channel/base-subscriber';
import { ModuleThreeCommands } from '../../event-channel/config/module-three-commands.enum';

@Injectable({
  providedIn: 'root'
})
export class ModuleOneSubscriberService extends BaseSubscriber {
  public addCreateItemHandler(): void {
    this.subscribe(ModuleThreeCommands.DELETE_THREE, (a: boolean) => {
      console.log('ModuleOneSubscriberService, ModuleThreeCommands.DELETE_THREE');
    });
  }
}
