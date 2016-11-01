/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import { NotificationService, NotificationType, Notification } from '../notification.service';

describe('Component: Notification', () => {

  it('should close the notification', () => {
    let component = new NotificationComponent(new NotificationService());
    component.notifications.push(new Notification(NotificationType.OK, 'message one'));
    component.notifications.push(new Notification(NotificationType.OK, 'message two'));
    expect(component.notifications.length).toBe(2);
    component.close(0);
    expect(component.notifications.length).toBe(1);
  });

});
