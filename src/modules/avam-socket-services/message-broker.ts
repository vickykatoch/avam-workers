import { WorkerMessage } from "$avam-config-models";
import { SocketControllerFactory } from "modules/avam-socket-services/socket-controller.factory";
import { SocketController } from "./socket-controller";
import { MessageNotifier } from "modules/avam-socket-services/message-notifier";
import { Subscription } from "rxjs/Subscription";


export class MessageBroker {
    //#region Static Members
    private static _instance: MessageBroker = new MessageBroker();
    constructor() {
        if (MessageBroker._instance) {
            throw new Error("Error: Instantiation failed: Use MessageBroker.instance instead of new.");
        }
        MessageBroker._instance = this;
        this.socketMessageSubscription = MessageNotifier.instance.message$.subscribe(this.onSocketMessageReceived.bind(this))
    }

    static get instance(): MessageBroker {
        return MessageBroker._instance;
    }
    //#endregion

    //#region Instance Fields
    private controllerContextMap = new Map<string,SocketController>();
    private socketMessageSubscription : Subscription;
    //#endregion

    //#region Public Methods
    onMessage(workerMessage: WorkerMessage, context: any) {
        console.log('Message Received in the broker');
        try {
            const controller = SocketControllerFactory.getController(workerMessage.payload);
        } catch (error) {
            console.error(error);
        }
    }
    postMessage(workerMessage: WorkerMessage, context?: any, sendToAll?: boolean) {

    }
    //#endregion

    //#region Helper Methods
    private onSetConfigRequestReceived(workerMessage: WorkerMessage, context?: any) {

    }
    private onSocketMessageReceived(message: any) {

    }
    //#endregion

}