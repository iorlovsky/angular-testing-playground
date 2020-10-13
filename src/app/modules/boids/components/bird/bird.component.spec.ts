import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bird } from '../../models/bird.model';
import { BirdComponent } from './bird.component';

describe('BirdComponent', () => {
  let component: BirdComponent;
  let fixture: ComponentFixture<BirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BirdComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdComponent);
    component = fixture.componentInstance;
    component.bird = new Bird(0, { x: 0, y: 0 });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
