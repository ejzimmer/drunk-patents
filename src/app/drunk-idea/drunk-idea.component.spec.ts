/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DrunkIdeaComponent } from './drunk-idea.component';
import { IdeaService } from '../idea.service';

describe('Component: DrunkIdea', () => {

  let component;
  const ideaService = new IdeaService();

  beforeEach(() => {
    component = new DrunkIdeaComponent(ideaService);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service to save an idea', () => {
    spyOn(ideaService, 'save');
    component.idea = 'I\'ve had a brilliant idea';
    component.saveIdea();
    expect(ideaService.save).toHaveBeenCalled();
  });
});
