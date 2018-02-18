import { WorkerMessage } from "$avam-config-models";


export abstract class SocketController {
    abstract onMessage(message : WorkerMessage);
}