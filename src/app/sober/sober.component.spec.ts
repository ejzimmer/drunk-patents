/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SoberComponent } from './sober.component';
import { IdeaService } from '../idea.service';

describe('Component: Sober', () => {

  let component;
  const ideaService = new IdeaService();
  const ideas = [
    { id: 1, idea: 'Great text' },
    { id: 7, idea: 'Brilliant text' },
    { id: 42, idea: 'Fantastic text' }];

  beforeEach(() => {
    spyOn(ideaService, 'get').and.returnValue(ideas);
    component = new SoberComponent(ideaService);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve a list of ideas', () => {
    expect(component.ideas).toBe(ideas);
  });

  it('should delete an unwanted idea and update the list', () => {
    spyOn(ideaService, 'delete').and.returnValue([ideas[0], ideas[2]]);
    component.deleteIdea(7);
    expect(ideaService.delete).toHaveBeenCalledWith(7);
    expect(component.ideas.length).toBe(2);
  });
});
