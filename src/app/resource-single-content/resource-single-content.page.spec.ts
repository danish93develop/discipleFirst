import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResourceSingleContentPage } from './resource-single-content.page';

describe('ResourceSingleContentPage', () => {
  let component: ResourceSingleContentPage;
  let fixture: ComponentFixture<ResourceSingleContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceSingleContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceSingleContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
