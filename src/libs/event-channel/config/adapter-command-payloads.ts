import { BasePayloads } from './base-payloads.type';
import { AdapterCommandTypes } from './adapter-command-types.enum';

export interface AdapterCommandPayloads extends BasePayloads<AdapterCommandTypes> {
  [AdapterCommandTypes.UPDATE_ONE_TO_TWO]: [number, number];
  [AdapterCommandTypes.UPDATE_ONE_TO_THREE]: [string, string];
}
