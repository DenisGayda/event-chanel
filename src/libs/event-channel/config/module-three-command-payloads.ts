import { BasePayloads } from './base-payloads.type';
import { ModuleThreeCommands } from './module-three-commands.enum';

export interface ModuleThreeCommandPayloads extends BasePayloads<ModuleThreeCommands> {
  [ModuleThreeCommands.CREATE_THREE]: string;
  [ModuleThreeCommands.UPDATE_THREE]: number;
  [ModuleThreeCommands.DELETE_THREE]: boolean;
}
