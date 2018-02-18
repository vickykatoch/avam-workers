import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketDataService } from './market-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [
    MarketDataService
  ]
})
export class AvamDataServicesModule { }
