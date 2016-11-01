import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from '../idea.service';

@Component({
  selector: 'drunk-sober',
  templateUrl: './sober.component.html',
  styleUrls: ['./sober.component.css']
})
export class SoberComponent implements OnInit {

  ideas: Array<Idea>;

  constructor(private ideaService: IdeaService) {
    this.ideas = ideaService.get();
  }

  ngOnInit() {
  }

  deleteIdea(id: number) {
    this.ideas = this.ideaService.delete(id);
  }
}
