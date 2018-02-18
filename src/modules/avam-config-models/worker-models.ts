import { LoggerStaticInfo, LogOptions } from "./logger-models";


// export type WorkerType = 'DEDICATED' | 'SHARED' | 'LOCAL';
export const WorkerTypes = Object.freeze({
  DEDICATED: 'DEDICATED',
  SHARED: 'SHARED',
  LOCAL: 'LOCAL'
});

export interface WorkerInfo {
  name: string;
  file: string;
  isActive: boolean;
  type: string;
}

export interface WorkerConfig {
  workerInfo: WorkerInfo;
  loggingAppInfo: LoggerStaticInfo;
  logOptions: LogOptions;
}

export interface BrokerConfig {
  workerConfig: WorkerConfig;
  context: any;
}

export interface WorkerMessage {
  type: string;
  // sender?: string;
  ts: number;
  payload?: any
}

export class WorkerMessageBuilder {
  static build(type: string, payload?: any) {
    return {
      type,
      ts: Date.now(),
      payload
    };
  }
}
export const WorkerMessageTypes = Object.freeze({
  CONNECT_WORKER : 'CONNECT_WORKER',
  CONNECT_WORKER_SUCCESS : 'CONNECT_WORKER_SUCCESS',
  CONNECT_WORKER_FAILED : 'CONNECT_WORKER_FAILED',

  SET_WORKER_CONFIG : 'SET_WORKER_CONFIG',
  SET_WORKER_CONFIG_FAILED : 'SET_WORKER_CONFIG_FAILED',
  WORKER_READY : 'WORKER_READY',

  CONNECT_SOCKET : 'CONNECT_SOCKET',
  CONNECT_SOCKET_SUCCESS : 'CONNECT_SOCKET_SUCCESS',
  CONNECT_SOCKET_FAILED : 'CONNECT_SOCKET_FAILED',

  SUBSCRIBE_DATA : 'SUBSCRIBE_DATA',
  SUBSCRIBE_DATA_FAILED : 'SUBSCRIBE_DATA_FAILED'
});