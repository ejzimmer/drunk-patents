/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { NotificationService, NotificationType, Notification } from './notification.service';

describe('Service: Notification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService]
    });
  });

  it('should broadcast a notification', inject([NotificationService], (service: NotificationService) => {
    service.notifications.asObservable().subscribe((notification: Notification) => {
      expect(notification.message).toBe('testing');
    });
    service.show(NotificationType.OK, 'testing');
  }));
});
