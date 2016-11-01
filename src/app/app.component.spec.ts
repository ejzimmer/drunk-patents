/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DrunkIdeaComponent } from './drunk-idea/drunk-idea.component';
import { IdeaService } from './idea.service';

describe('App: DrunkPatents', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DrunkIdeaComponent
      ],
      imports: [
        FormsModule,
        RouterModule.forRoot([
          { path: '**', component: DrunkIdeaComponent }
        ])
      ],
      providers: [
        IdeaService
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Drunk Patents'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Drunk Patents');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Drunk Patents');
  }));
});
