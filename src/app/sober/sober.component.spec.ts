/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SoberComponent } from './sober.component';
import { IdeaService } from '../idea.service';

describe('Component: Sober', () => {

  let component;
  const ideaService = new IdeaService();
  const ideas = ['Great idea', 'Brilliant idea', 'Fantastic idea'];

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
});
