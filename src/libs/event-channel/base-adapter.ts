import { CommandTypes } from './config/command-types.type';
import { PickTypeFromInterface } from './config/pick-type-from-interface.type';
import { EventChannelService } from './event-channel.service';
import { Injectable } from '@angular/core';
import { CommandPayloads } from './config/command.payloads';

@Injectable({providedIn: 'root'})
export class BaseAdapter<M extends CommandTypes, T extends CommandTypes> {
  constructor(private readonly eventChanel: EventChannelService) {}

  public subscribe<D extends M>(
    type: D,
    handler: (payload: PickTypeFromInterface<CommandPayloads, D>) => void,
  ): string {
    return this.eventChanel.addCommandHandler(type, handler);
  }

  public publish<D extends T>(type: D, payload: PickTypeFromInterface<CommandPayloads, D>): void {
    this.eventChanel.sendCommand(type, payload);
  }
}
