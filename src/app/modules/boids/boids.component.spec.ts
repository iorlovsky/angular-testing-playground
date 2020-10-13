import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoidsComponent } from './boids.component';
import { BirdComponent } from './components/bird/bird.component';

describe('BoidsComponent', () => {
  let component: BoidsComponent;
  let fixture: ComponentFixture<BoidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoidsComponent,
        BirdComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
