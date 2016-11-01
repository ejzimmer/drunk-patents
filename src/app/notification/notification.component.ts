import { Component, OnInit } from '@angular/core';
import { Notification, NotificationType, NotificationService } from '../notification.service';

@Component({
  selector: 'drunk-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];
  closed: any;

  constructor(notificationService: NotificationService) {
    this.closed = {};
    notificationService.notifications.asObservable()
      .subscribe((notification) => {
        this.notifications.push(notification);
        setTimeout(() => this.notifications.splice(0, 1), 5000);
      });
    notificationService.clear.asObservable()
      .subscribe((clear) => {
        if (clear) {
          this.notifications = [];
        }
      });
  }

  ngOnInit() {
  }

  getType(notification: Notification) {
    return NotificationType[notification.type];
  }

  getClosed(index: number) {
    return this.closed[index] ? 'closed' : '';
  }

  close(index: number) {
    this.closed[index] = true;
    setTimeout(() => {
      this.notifications.splice(index, 1);
      delete this.closed[index];
    }, 1000);
  }
}
