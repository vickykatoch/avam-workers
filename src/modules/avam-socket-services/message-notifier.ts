import { Subject } from "rxjs/Subject";
import { WorkerMessage } from "$avam-config-models";



export class MessageNotifier {
    //#region Static Members
    private static _instance: MessageNotifier = new MessageNotifier();
    constructor() {
        if (MessageNotifier._instance) {
            throw new Error("Error: Instantiation failed: Use MessageNotifier.instance instead of new.");
        }
        MessageNotifier._instance = this;
    }

    static get instance(): MessageNotifier {
        return MessageNotifier._instance;
    }
    //#endregion
    
    //#region Instance Fields
    private notifier = new Subject<WorkerMessage>();
    message$ = this.notifier.asObservable();
    //#endregion

    //#region Public Methods
    notify(message: WorkerMessage) {
        this.notifier.next(message);
    }
    //#endregion
}