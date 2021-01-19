import { BasePayloads } from './base-payloads.type';
import { ModuleOneCommands } from './module-one-commands.enum';

export interface ModuleOneCommandPayloads extends BasePayloads<ModuleOneCommands> {
  [ModuleOneCommands.CREATE_ONE]: number;
  [ModuleOneCommands.UPDATE_ONE]: string;
  [ModuleOneCommands.DELETE_ONE]: boolean;
}
