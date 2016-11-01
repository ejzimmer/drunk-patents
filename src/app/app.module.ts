import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DrunkIdeaComponent } from './drunk-idea/drunk-idea.component';
import { IdeaService } from "./idea.service";
import { SoberComponent } from './sober/sober.component';
import {NotificationService} from "./notification.service";
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    DrunkIdeaComponent,
    SoberComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'sober', component: SoberComponent },
      { path: '**', component: DrunkIdeaComponent }
    ])
  ],
  providers: [IdeaService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
