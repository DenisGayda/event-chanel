import { ModuleOneCommands } from './module-one-commands.enum';
import { ModuleTwoCommands } from './module-two-commands.enum';
import { ModuleThreeCommands } from './module-three-commands.enum';
import { AdapterCommandTypes } from './adapter-command-types.enum';

export type CommandTypes = ModuleOneCommands | ModuleTwoCommands | ModuleThreeCommands | AdapterCommandTypes;
