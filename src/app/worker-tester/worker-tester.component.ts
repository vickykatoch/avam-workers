import { Component, OnInit } from '@angular/core';
import { WorkerConfig, WorkerTypes, LogLevel } from '$avam-config-models';
import { WorkerProxyService } from '$avam-worker-proxy';
import { MarketDataService } from '$avam-data-services';

@Component({
  selector: 'app-worker-tester',
  templateUrl: './worker-tester.component.html',
  styleUrls: ['./worker-tester.component.css']
})
export class WorkerTesterComponent implements OnInit {

  constructor(private workerProxyService: WorkerProxyService,
              private marketDataService : MarketDataService) { 
    workerProxyService.initialize(this.getWorkersConfig());
  }

  ngOnInit() {
  }

  onStart() {
    this.marketDataService.subscribe();
  }

  getWorkersConfig(): WorkerConfig[] {
    return [
      {
        workerInfo: {
          name: 'DATA-WORKER',
          file: 'assets/workers/d-worker.js',
          isActive: true,
          type: WorkerTypes.DEDICATED
        },
        loggingAppInfo: {
          appName: 'Main',
          user: 'BK'
        },
        logOptions: {
          appLogLevel: LogLevel.DEBUG,
          logInterval: 1000,
          appenders: [
            {
              name: 'console',
              format: 'text',
              logLevel: LogLevel.DEBUG
            }
          ]
        }
      },

      //  {
      //   workerInfo : {
      //     name : 'SHARED-WORKER',
      //     file : 'assets/workers/sworker.js',
      //     isActive : true,
      //     type : WorkerTypes.SHARED
      //   },
      //   loggingAppInfo : {
      //     appName : 'ML',
      //     user : 'BK'
      //   },
      //   logOptions : {
      //     appLogLevel : LogLevel.DEBUG,
      //     logInterval : 1000,
      //     appenders : [
      //       {
      //         name : 'console',
      //         format: 'text',
      //         logLevel: LogLevel.DEBUG
      //       }
      //     ]
      //   }
      // }
    ];
  }
}
