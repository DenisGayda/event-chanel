import { CommandTypes } from './command-types.type';

export type BasePayloads<R extends CommandTypes> = Record<R, any>;
