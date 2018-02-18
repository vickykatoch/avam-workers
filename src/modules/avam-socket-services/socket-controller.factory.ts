import { SocketController } from "./socket-controller";
import { SocketConnectionInfo } from "$avam-config-models";
import { SocketIOSocketController } from "./socketio/socketio-socket.controller";
// import throttle from "lodash-es/throttle";



export class SocketControllerFactory {
    private static controllers = new Map<string,SocketController>();

    static getController(connectionInfo: SocketConnectionInfo) : SocketController {
        const key = `${connectionInfo.type}-${connectionInfo.name}`;
        if(!SocketControllerFactory.controllers.has(key)) {
            SocketControllerFactory.controllers.set(key,
                SocketControllerFactory.resolveController(connectionInfo.type));
        }
        return SocketControllerFactory.controllers.get(key);
    }

    private static resolveController(type: string) : SocketController {
        if(type === 'SOCKETIO') {
            return new SocketIOSocketController();
        }
        throw new Error('Unknown connection type');
    }
}