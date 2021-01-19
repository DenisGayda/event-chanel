import { Injectable } from '@angular/core';
import { BasePublisher } from '../../event-channel/base-publisher';
import { ModuleTwoCommandPayloads } from '../../event-channel/config/module-two-command-payloads';
import { ModuleTwoCommands } from '../../event-channel/config/module-two-commands.enum';

@Injectable({
  providedIn: 'root'
})
export class ModuleTwoPublisherService extends BasePublisher<ModuleTwoCommands, ModuleTwoCommandPayloads>{
  public createItem(): void {
    super.publish(ModuleTwoCommands.CREATE_TWO, 'cococo');
  }

  public deleteItem(): void {
    super.publish(ModuleTwoCommands.DELETE_TWO, 958);
  }

  public updateItem(): void {
    super.publish(ModuleTwoCommands.UPDATE_TWO, true);
  }
}
