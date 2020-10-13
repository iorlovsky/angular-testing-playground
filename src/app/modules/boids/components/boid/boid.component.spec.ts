import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boid } from '../../models/boid.model';
import { BoidComponent } from './boid.component';

describe('BirdComponent', () => {
  let component: BoidComponent;
  let fixture: ComponentFixture<BoidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoidComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoidComponent);
    component = fixture.componentInstance;
    component.boid = new Boid(0, { x: 0, y: 0 });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
