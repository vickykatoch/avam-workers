import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WorkerProxyModule } from '$avam-worker-proxy';

import { AppComponent } from './app.component';
import { WorkerTesterComponent } from './worker-tester/worker-tester.component';
import { AvamDataServicesModule } from '$avam-data-services';


@NgModule({
  declarations: [
    AppComponent,
    WorkerTesterComponent
  ],
  imports: [
    BrowserModule,
    WorkerProxyModule,
    AvamDataServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
