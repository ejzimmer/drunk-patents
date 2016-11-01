import { Component, OnInit } from '@angular/core';
import { Notification, NotificationType, NotificationService } from '../notification.service';

@Component({
  selector: 'drunk-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];

  constructor(notificationService: NotificationService) {
    notificationService.notifications.asObservable()
      .subscribe((notification) => this.notifications.push(notification));
  }

  ngOnInit() {
  }

  getType(notification: Notification) {
    return NotificationType[notification.type];
  }

  close(index: number) {
    this.notifications.splice(index, 1);
  }
}
