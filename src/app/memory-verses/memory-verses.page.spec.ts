import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemoryVersesPage } from './memory-verses.page';

describe('MemoryVersesPage', () => {
  let component: MemoryVersesPage;
  let fixture: ComponentFixture<MemoryVersesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryVersesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemoryVersesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
