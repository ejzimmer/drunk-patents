import { Injectable } from '@angular/core';

@Injectable()
export class IdeaService {

  constructor() { }

  save(idea: string) {
    localStorage.setItem('drunk-patents', idea);
  }

  get() {
    const ideas = [];
    for (let i = 0; i < localStorage.length; i++) {
      ideas.push(localStorage.getItem(localStorage.key(i)));
    }
    return ideas;
  }
}
