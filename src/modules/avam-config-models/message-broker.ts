import { WorkerMessage } from "./worker-models";

export interface IMessageBroker {
    postMessage(workMessage: WorkerMessage, isLocal?: boolean) : void;
    addEventListener(eventName: string , callback: Function);
}
