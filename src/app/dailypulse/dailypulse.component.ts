import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dailypulse',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dailypulse.component.html',
  styleUrl: './dailypulse.component.css'
})
export class DailypulseComponent implements OnInit {
currentTime!: string;
  unitConsumed: number = 55; // Static
  unitLimit: number = 100;   // Static

  shiftData = [
    {
      shift: 'Shift One',
      limit: 60,
      consumed: 45
    },
    {
      shift: 'Shift Two',
      limit: 60,
      consumed: 0
    },
    {
      shift: 'Shift Three',
      limit: 60,
      consumed: 0
    }
  ];

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 10000); // Update every second
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleString(); // e.g., "9/15/2025, 4:23:01 PM"
  }

  get progressPercent(): number {
    return (this.unitConsumed / this.unitLimit) * 100;
  }
}

