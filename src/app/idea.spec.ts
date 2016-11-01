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

  const setItems = () => {
    localStorage.setItem('idea1', 'A Great idea');
    localStorage.setItem('idea2', 'Another great idea');
    localStorage.setItem('idea3', 'A truly brilliant idea');
  };

  it('should get the number of the last saved idea', inject([IdeaService], (service: IdeaService) => {
    setItems();
    expect(service.getLastId()).toBe(3);
  }));

  it('should save an idea to local storage', inject([IdeaService], (service: IdeaService) => {
    const idea = 'I\'m so drunk!';
    service.save(idea);

    expect(localStorage.getItem('idea1')).toBe(idea);
  }));

  it('should return a list of ideas', inject([IdeaService], (service: IdeaService) => {
    setItems();
    expect(service.get()).toEqual(['A Great idea', 'Another great idea', 'A truly brilliant idea']);
  }));

  it('should save new ideas with new ids', inject([IdeaService], (service: IdeaService) => {
    setItems();
    expect(service.save('Some new idea')).toBe(4);
  }));

  it('it should update existing ideas', inject([IdeaService], (service: IdeaService) => {
    setItems();
    expect(service.save('Some old idea again', 2)).toBe(2);
  }));
});
