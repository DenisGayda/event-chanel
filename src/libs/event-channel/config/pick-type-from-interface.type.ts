export type PickTypeFromInterface<T, N extends keyof T> = T[N];
