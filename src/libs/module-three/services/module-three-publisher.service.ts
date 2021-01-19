import { Injectable } from '@angular/core';
import { BasePublisher } from '../../event-channel/base-publisher';
import { ModuleThreeCommandPayloads } from '../../event-channel/config/module-three-command-payloads';
import { ModuleThreeCommands } from '../../event-channel/config/module-three-commands.enum';

@Injectable({
  providedIn: 'root'
})
export class ModuleThreePublisherService extends BasePublisher<ModuleThreeCommands, ModuleThreeCommandPayloads>{
  public createItem(): void {
    super.publish(ModuleThreeCommands.CREATE_THREE, 'nonono');
  }

  public deleteItem(): void {
    super.publish(ModuleThreeCommands.DELETE_THREE, true);
  }

  public updateItem(): void {
    super.publish(ModuleThreeCommands.UPDATE_THREE, 98);
  }
}
