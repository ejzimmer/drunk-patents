/* tslint:disable:no-unused-variable */

import { DrunkIdeaComponent } from './drunk-idea.component';
import { IdeaService } from '../idea.service';
import { NotificationService, NotificationType } from '../notification.service';

describe('Component: DrunkIdea', () => {

  let component;
  const ideaService = new IdeaService();
  const notificationService = new NotificationService();

  beforeEach(() => {
    component = new DrunkIdeaComponent(ideaService, notificationService);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service to save an text', () => {
    spyOn(ideaService, 'save');
    component.idea = 'I\'ve had a brilliant text';
    component.saveIdea();
    expect(ideaService.save).toHaveBeenCalled();
  });

  it('should pass in the current id if one exists', () => {
    spyOn(ideaService, 'save').and.returnValue(1);
    component.idea = 'Something dumb, no doubt';
    expect(component.id).toBeUndefined();

    component.saveIdea();
    expect(component.id).toBe(1);
    expect(ideaService.save).toHaveBeenCalledWith(component.idea, undefined);

    component.saveIdea();
    expect(ideaService.save).toHaveBeenCalledWith(component.idea, 1);
  });

  it('should reset everything on manual save', () => {
    spyOn(ideaService, 'save').and.returnValue(1);
    const idea = 'Something else dumb, I\'m sure';
    component.idea = idea;
    component.saveIdea();
    expect(component.id).toBe(1);

    component.finishIdea();
    expect(ideaService.save).toHaveBeenCalledWith(idea, 1);
    expect(component.id).toBeFalsy();
    expect(component.idea).toBeFalsy();
  });

  it('should display a success message when an idea has been saved', () => {
    spyOn(notificationService, 'show');
    component.idea = 'Successfully saved idea';
    component.finishIdea();

    expect(notificationService.show)
      .toHaveBeenCalledWith(NotificationType.OK, 'Your idea has been saved successfully');
  });
});
