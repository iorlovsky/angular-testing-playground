import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../shared/shared.module';
import { BoidsComponent } from './boids.component';
import { BoidComponent } from './components/boid/boid.component';
import { GridComponent } from './components/grid/grid.component';

describe('BoidsComponent', () => {
  let component: BoidsComponent;
  let fixture: ComponentFixture<BoidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoidsComponent,
        BoidComponent,
        GridComponent
      ],
      imports: [
        SharedModule
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
