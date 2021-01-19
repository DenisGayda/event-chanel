import { Injectable } from '@angular/core';
import { BaseAdapter } from '../event-channel/base-adapter';
import { AdapterCommandTypes } from '../event-channel/config/adapter-command-types.enum';
import { CommandAdapterSubscribeType } from './configs/command-adapter.types';
import { ModuleOneCommands } from '../event-channel/config/module-one-commands.enum';

@Injectable({
  providedIn: 'root'
})
export class CommandAdapterService extends BaseAdapter<CommandAdapterSubscribeType, AdapterCommandTypes>{
  public makeHandler(): string {
    return this.subscribe(ModuleOneCommands.UPDATE_ONE, (arg: string) => {
      this.publish(AdapterCommandTypes.UPDATE_ONE_TO_TWO, [Math.round(Math.random() * 100), Math.round(Math.random() * 100)]);
      this.publish(AdapterCommandTypes.UPDATE_ONE_TO_THREE, [arg, arg]);
    });
  }
}
