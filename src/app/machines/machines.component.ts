import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-machines',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.css'
})
export class MachinesComponent implements OnInit {

  operators: any[] = [];
  expandedCards: Set<number> = new Set(); // For toggling machines

  constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     if (params['data']) {
  //       try {
  //         this.operators = JSON.parse(params['data']);
  //         console.log(this.operators);
  //       } catch (e) {
  //         console.error('Invalid data in queryParams');
  //       }
  //     }
  //   });
  // }

  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    if (params['data']) {
      try {
        const parsed = JSON.parse(params['data']);
        this.operators = parsed.operators ?? [];
      } catch (e) {
        console.error('Invalid JSON in queryParams', e);
        this.operators = [];
      }
    }
  });
}


  toggleCard(index: number) {
    if (this.expandedCards.has(index)) {
      this.expandedCards.delete(index);
    } else {
      this.expandedCards.add(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedCards.has(index);
  }
}
