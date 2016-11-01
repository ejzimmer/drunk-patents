import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'drunk-idea',
  templateUrl: './drunk-idea.component.html',
  styleUrls: ['./drunk-idea.component.css']
})
export class DrunkIdeaComponent implements OnInit {

  idea: string;
  id: number;

  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
  }

  saveIdea() {
    this.id = this.ideaService.save(this.idea, this.id);
  }

  finishIdea() {
    this.saveIdea();
    this.id = undefined;
    this.idea = '';
  }
}
