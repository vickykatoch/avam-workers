import { MessageBroker } from '$avam-socket-services';
import { WorkerMessageBuilder, WorkerMessageTypes } from '$avam-config-models';

console.info('Dedicated worker has been started');

// MessageBroker.instance.onMessage(WorkerMessageBuilder.build(WorkerMessageTypes.CONNECT_WORKER),self);

self.addEventListener('message', (evt: MessageEvent) => {
    MessageBroker.instance.onMessage(evt.data, self);
    console.log('Message from : ' + evt);
});

self.addEventListener('messageerror', (evt: ErrorEvent) => {
    console.error(evt);
});