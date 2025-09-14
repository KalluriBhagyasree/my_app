import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { Reports } from './reports';
import { ReportsRoutingModule } from './reports-routing-module';

@NgModule({// ✅ declare your component here
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule {}
