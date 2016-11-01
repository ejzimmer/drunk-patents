import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DrunkIdeaComponent } from './drunk-idea/drunk-idea.component';
import { IdeaService } from "./idea.service";
import { SoberComponent } from './sober/sober.component';

@NgModule({
  declarations: [
    AppComponent,
    DrunkIdeaComponent,
    SoberComponent
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
  providers: [IdeaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
