import { Injectable } from '@angular/core';
import { EventChanelInterface } from '../../config/interfaces/event-chanel.interface';
import { CommandTypes } from './config/command-types.type';
import { PickTypeFromInterface } from './config/pick-type-from-interface.type';
import { CommandPayloads } from './config/command.payloads';

@Injectable({
  providedIn: 'root'
})
export class EventChannelService implements EventChanelInterface {
  private commandHandlers = new Map<CommandTypes, Map<string, (payload: any) => void>>();
  private queryHandlers = new Map<string, (payload?: any) => any>();

  public sendCommand(type: CommandTypes, payload: any): void {
    console.log(type, payload);
    this.publishCommand(type, payload);
  }

  public addCommandHandler(
    type: CommandTypes,
    handler: (payload: PickTypeFromInterface<CommandPayloads, CommandTypes>) => void,
  ): string {
    const hash = generateId();
    this.setCommandHandler(type, hash, handler);

    return hash;
  }

  public sendQuery(type: string, options?: any): any {
    const handler = this.queryHandlers.get(type);

    if (!handler) {
      console.error(`Не предоставлен обработчик для такого типа запроса: ${type}`);

      return null;
    }

    return handler(options);
  }
  public addQueryHandler(type: string, handler: (options: any) => any): void {
    this.queryHandlers.set(type, handler);
  }

  private publishCommand(type: CommandTypes, payload: any): void {
    const handlers = this.commandHandlers.get(type);

    if (!handlers) {
      return;
    }

    handlers.forEach((handler) => handler(payload));
  }


  private setCommandHandler(type: CommandTypes, hash: string,  handler: (payload: any) => void): void {
    const set = this.commandHandlers.get(type);

    if (!!set) {
      set.set(hash, handler);

      return;
    }

    const newSet = new Map<string, (payload: any) => void>();
    newSet.set(hash, handler);
    this.commandHandlers.set(type, newSet);
  }
}

function generateId(): string {
  return [Date.now(), Math.trunc(Math.random() * 0xFFFFF)]
    .map((value: number) => value.toString(36))
    .join('-');
}

