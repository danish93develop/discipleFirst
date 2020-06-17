import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResourcesPage } from './resources.page';

describe('ResourcesPage', () => {
  let component: ResourcesPage;
  let fixture: ComponentFixture<ResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
