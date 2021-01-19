import { BasePayloads } from './base-payloads.type';
import { ModuleTwoCommands } from './module-two-commands.enum';

export interface ModuleTwoCommandPayloads extends BasePayloads<ModuleTwoCommands> {
  [ModuleTwoCommands.CREATE_TWO]: string;
  [ModuleTwoCommands.UPDATE_TWO]: boolean;
  [ModuleTwoCommands.DELETE_TWO]: number;
}
