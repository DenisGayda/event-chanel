import { ModuleOneCommandPayloads } from './module-one-command-payloads';
import { ModuleTwoCommandPayloads } from './module-two-command-payloads';
import { ModuleThreeCommandPayloads } from './module-three-command-payloads';
import { AdapterCommandPayloads } from './adapter-command-payloads';

export type CommandPayloads = ModuleOneCommandPayloads
  & ModuleTwoCommandPayloads
  & ModuleThreeCommandPayloads
  & AdapterCommandPayloads;
