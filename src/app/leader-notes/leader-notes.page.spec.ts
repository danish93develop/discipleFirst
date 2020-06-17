import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaderNotesPage } from './leader-notes.page';

describe('LeaderNotesPage', () => {
  let component: LeaderNotesPage;
  let fixture: ComponentFixture<LeaderNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderNotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
