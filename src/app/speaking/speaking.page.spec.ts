import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeakingPage } from './speaking.page';

describe('SpeakingPage', () => {
  let component: SpeakingPage;
  let fixture: ComponentFixture<SpeakingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
