import { Injectable } from '@angular/core';
import { BasePublisher } from '../../event-channel/base-publisher';
import { ModuleOneCommandPayloads } from '../../event-channel/config/module-one-command-payloads';
import { ModuleOneCommands } from '../../event-channel/config/module-one-commands.enum';

@Injectable({
  providedIn: 'root'
})
export class ModuleOnePublisherService extends BasePublisher<ModuleOneCommands, ModuleOneCommandPayloads>{
  public createItem(): void {
    super.publish(ModuleOneCommands.CREATE_ONE, 5);
  }

  public deleteItem(): void {
    super.publish(ModuleOneCommands.DELETE_ONE, false);
  }

  public updateItem(): void {
    super.publish(ModuleOneCommands.UPDATE_ONE, 'ololo');
  }
}
