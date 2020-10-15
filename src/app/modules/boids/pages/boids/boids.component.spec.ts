import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { SharedModule } from '../../../shared/shared.module';
import { BoidComponent } from '../../components/boid/boid.component';
import { GridComponent } from '../../components/grid/grid.component';
import { provideMockBoidsService } from '../../services/boids/boids.service.mock';
import { BoidsComponent } from './boids.component';

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
      ],
      providers: [
        provideMockBoidsService(),
        provideMockStore()
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
