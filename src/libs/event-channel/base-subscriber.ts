import { CommandTypes } from './config/command-types.type';
import { CommandPayloads } from './config/command.payloads';
import { PickTypeFromInterface } from './config/pick-type-from-interface.type';
import { EventChannelService } from './event-channel.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class BaseSubscriber {
  constructor(private readonly eventChanel: EventChannelService) { }

  public subscribe<D extends CommandTypes>(
    type: D,
    handler: (payload: PickTypeFromInterface<CommandPayloads, D>) => void,
  ): string {
    return this.eventChanel.addCommandHandler(type, handler);
  }
}
