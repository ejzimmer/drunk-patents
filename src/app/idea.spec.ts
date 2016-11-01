/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import {IdeaService, Idea} from './idea.service';

describe('Service: IdeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeaService]
    });
    localStorage.clear();
  });

  const setItems = () => {
    localStorage.setItem('idea1', 'A Great text');
    localStorage.setItem('idea2', 'Another great text');
    localStorage.setItem('idea3', 'A truly brilliant text');
  };

  it('should get the number of the last saved text', inject([IdeaService], (service: IdeaService) => {
    setItems();
    expect(service.getLastId()).toBe(3);
  }));

  it('should save an text to local storage', inject([IdeaService], (service: IdeaService) => {
    const idea = 'I\'m so drunk!';
    service.save(idea, undefined);

    expect(localStorage.getItem('idea1')).toBe(idea);
  }));

  it('should return a list of ideas', inject([IdeaService], (service: IdeaService) => {
    setItems();
    expect(service.get()).toEqual([
      new Idea(1, 'A Great text'),
      new Idea(2, 'Another great text'),
      new Idea(3, 'A truly brilliant text')
    ]);
  }));

  it('should save new ideas with new ids', inject([IdeaService], (service: IdeaService) => {
    setItems();
    expect(service.save('Some new text', undefined)).toBe(4);
  }));

  it('it should update existing ideas', inject([IdeaService], (service: IdeaService) => {
    setItems();
    expect(service.save('Some old text again', 2)).toBe(2);
  }));

  it('should delete an unwanted text and return the updated list', inject([IdeaService], (service: IdeaService) => {
    setItems();
    const newList = service.delete(2);
    expect(service.get().length).toBe(2);
    expect(newList.length).toBe(2);
  }));
});
