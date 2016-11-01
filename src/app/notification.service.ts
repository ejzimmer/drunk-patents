import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {

  notifications: Subject<Notification> = new Subject<Notification>();
  clear: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  show(type: NotificationType, message: string) {
    this.notifications.next(new Notification(type, message));
  }

  clearAll() {
    this.clear.next(true);
  }
}

export enum NotificationType {
  OK, INFO
}

export class Notification {

  constructor(public type: NotificationType, public message: string) {}
}
