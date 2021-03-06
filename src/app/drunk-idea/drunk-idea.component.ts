import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea.service';
import { NotificationService, NotificationType } from '../notification.service';

@Component({
  selector: 'drunk-idea',
  templateUrl: './drunk-idea.component.html',
  styleUrls: ['./drunk-idea.component.css']
})
export class DrunkIdeaComponent implements OnInit {

  idea: string;
  id: number;

  constructor(private ideaService: IdeaService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.clearAll();
  }

  saveIdea(autosave: boolean = true) {
    this.id = this.ideaService.save(this.idea, this.id);
    if (autosave) {
      this.notificationService.show(NotificationType.INFO, 'Autosaved');
    }
  }

  finishIdea() {
    this.saveIdea(false);
    this.id = undefined;
    this.idea = '';
    this.notificationService.show(NotificationType.OK, 'Your idea has been saved successfully');
  }
}
