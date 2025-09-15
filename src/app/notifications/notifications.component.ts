import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
 notifications = [
    { message: 'Energy consumption is unusually high. Please reduce usage to avoid overload.', type: 'warning' },
    { message: 'Machine limit has been crossed. Immediate action is recommended.', type: 'warning' },
    { message: 'You have exceeded your daily energy usage limit. Please conserve energy.', type: 'warning' },
    { message: 'Power is being consumed unnecessarily. Turn off unused appliances.', type: 'warning' },
    { message: 'Ghost power detected. Check for idle devices drawing current.', type: 'warning' },
    { message: 'Greetings! Your energy consumption is within the optimal range. Keep it up!', type: 'info' }
  ];
}
