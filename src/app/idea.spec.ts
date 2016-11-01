/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IdeaService } from './idea.service';

describe('Service: IdeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeaService]
    });
    localStorage.clear();
  });

  it('should save an idea to local storage', inject([IdeaService], (service: IdeaService) => {
    expect(service).toBeTruthy();

    const idea = 'I\'m so drunk!';
    service.save(idea);
    expect(localStorage.getItem('drunk-patents')).toBe(idea);
  }));

  it('should return a list of ideas', inject([IdeaService], (service: IdeaService) => {
    localStorage.setItem('drunk-patents-1', 'A Great idea');
    localStorage.setItem('drunk-patents-2', 'Another great idea');
    localStorage.setItem('drunk-patents=3', 'A truly brilliant idea');

    expect(service.get()).toEqual(['A Great idea', 'Another great idea', 'A truly brilliant idea']);
  }));
});
