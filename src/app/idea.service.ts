import { Injectable } from '@angular/core';

@Injectable()
export class IdeaService {

  constructor() {}

  keyToId(key: string) {
    return Number.parseInt(key.replace('idea', ''));
  }

  idToKey(id: number) {
    return `idea${id}`;
  }

  getLastId() {
    return Object.keys(localStorage).map(key => this.keyToId(key))
      .reduce((prev, current) => Math.max(prev, current), 0) || 0;
  }

  save(idea: string, id: number) {
    id = id || this.getLastId() + 1;
    localStorage.setItem(this.idToKey(id), idea);
    return id;
  }

  get() {
    return Object.keys(localStorage).map((key) => new Idea(this.keyToId(key), localStorage.getItem(key)));
  }

  delete(id) {
    localStorage.removeItem(this.idToKey(id));
    return this.get();
  }
}

export class Idea {

  id: number;
  text: string;

  constructor(id: number, idea: string) {
    this.id = id;
    this.text = idea;
  }
}
