import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from '../idea.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'drunk-sober',
  templateUrl: './sober.component.html',
  styleUrls: ['./sober.component.css']
})
export class SoberComponent implements OnInit {

  ideas: Array<Idea>;

  constructor(private ideaService: IdeaService, private notificationService: NotificationService) {
    this.ideas = ideaService.get();
  }

  ngOnInit() {
    this.notificationService.clearAll();
  }

  deleteIdea(id: number) {
    this.ideas = this.ideaService.delete(id);
  }
}
