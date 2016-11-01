import { Injectable } from '@angular/core';

@Injectable()
export class IdeaService {

  constructor() {}

  getLastId() {
    return Object.keys(localStorage).map(key => Number.parseInt(key.replace('idea', '')))
      .reduce((prev, current) => Math.max(prev, current), 0) || 0;
  }

  save(idea: string, id: number) {
    id = id || this.getLastId() + 1;
    const key = `idea${id}`;
    localStorage.setItem(key, idea);
    return id;
  }

  get() {
    return Object.keys(localStorage).map((key) => localStorage.getItem(key));
  }
}
