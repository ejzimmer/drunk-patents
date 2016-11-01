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
  deleted: any;

  constructor(private ideaService: IdeaService, private notificationService: NotificationService) {
    this.ideas = ideaService.get();
    this.deleted = {};
  }

  ngOnInit() {
    this.notificationService.clearAll();
  }

  deleteIdea(id: number) {
    this.deleted[id] = true;
    setTimeout(() => {
      this.ideas = this.ideaService.delete(id);
      delete this.deleted[id];
    }, 1000);

  }
}
