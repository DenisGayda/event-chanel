import { CommandTypes } from './config/command-types.type';
import { BasePayloads } from './config/base-payloads.type';
import { PickTypeFromInterface } from './config/pick-type-from-interface.type';
import { EventChannelService } from './event-channel.service';
import { Injectable } from '@angular/core';

type ExtractTypeFromEnum<T> = Extract<CommandTypes, keyof T>;

@Injectable({providedIn: 'root'})
export class BasePublisher<M extends CommandTypes, T extends BasePayloads<M>> {
  constructor(private readonly eventChanel: EventChannelService) {}

  public publish<D extends ExtractTypeFromEnum<T>>(type: D, payload: PickTypeFromInterface<T, D>): void {
     this.eventChanel.sendCommand(type, payload);
  }
}
