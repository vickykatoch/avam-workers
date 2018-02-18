import { SocketController } from "../socket-controller";
import { WorkerMessage } from "$avam-config-models";


export class SocketIOSocketController extends SocketController {
    
    onMessage(message: WorkerMessage) {
        console.log('Message Received on SocketIO');
    }

}