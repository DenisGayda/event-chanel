export interface EventChanelInterface {
  sendCommand(type: string, payload: any): void;
  addCommandHandler(type: string, handler: (payload: any) => void): string;

  // sendQuery(type: string, options: any): any;
  // addQueryHandler(type: string, handler: (options: any) => any): void;
}

//
// enum Commands1 {
//   GET= 'GET',
//   POST= 'POST',
//   DELETE= 'DELETE',
// }
//
// enum Commands2 {
//   GET= 'GET2',
//   POST= 'POST2',
//   DELETE= 'DELETE2',
// }
//
// type SC = Commands1 | Commands2;
// type BaseCommands<R extends SC> = Record<R, any>;
//
// interface ConcreteCommand1 extends BaseCommands<Commands1> {
//   [Commands1.GET]: string[];
//   [Commands1.POST]: boolean;
//   [Commands1.DELETE]: number;
// }
//
// interface ConcreteCommand2 extends BaseCommands<Commands2> {
//   [Commands2.GET]: {a: number, b: string};
//   [Commands2.POST]: boolean[];
//   [Commands2.DELETE]: number;
// }
//
// type C<T> = Extract<SC, keyof T>;
// type PICK<T, N extends keyof T> = T[N];
//
// interface MergedPayload extends ConcreteCommand1, ConcreteCommand2 {}
//
//
// export abstract class BasePublisher<M extends SC, T extends BaseCommands<M>> {
//   protected constructor(private readonly eventChanel: EventChanelInterface) { }
//
//   public sendCommand<D extends C<T>>(type: D, payload: PICK<T, D>): void {
//     this.eventChanel.sendCommand(type, payload);
//   }
// }
//
// export abstract class BaseSubscriber {
//   protected constructor(private readonly eventChanel: EventChanelInterface) { }
//
//   public subscribe<D extends SC>(type: D, handler: (payload: PICK<MergedPayload, D>) => void): void {
//     this.eventChanel.addCommandHandler(type, handler);
//   }
// }
//
// class ConcreteSClass1 extends BaseSubscriber {
//   public makeCommand(): void {
//     this.subscribe(Commands1.GET, (a: string[]) => {});
//   }
// }
//
// class ConcreteSClass2 extends BaseSubscriber {
//   public makeCommand(): void {
//     this.subscribe(Commands2.GET, ({a, b}) => {});
//   }
// }
//
// class ConcretePClass1 extends BasePublisher<Commands1, ConcreteCommand1> {
//   public makeCommand(): void {
//     this.sendCommand(Commands1.GET, []);
//   }
// }
//
// class ConcretePClass2 extends BasePublisher<Commands2, ConcreteCommand2> {
//   public makeCommand(): void {
//     this.sendCommand(Commands2.GET, {a: 5, b: ''});
//   }
// }

