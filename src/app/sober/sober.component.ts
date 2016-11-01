import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'drunk-sober',
  templateUrl: './sober.component.html',
  styleUrls: ['./sober.component.css']
})
export class SoberComponent implements OnInit {

  ideas: Array<string>;

  constructor(private ideaService: IdeaService) {
    this.ideas = ideaService.get();
  }

  ngOnInit() {
  }

}
