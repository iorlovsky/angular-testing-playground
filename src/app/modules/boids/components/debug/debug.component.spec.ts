import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockBoidsService } from '../../services/boids/boids.service.mock';
import { DebugComponent } from './debug.component';

describe('DebugComponent', () => {
  let component: DebugComponent;
  let fixture: ComponentFixture<DebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DebugComponent],
      providers: [
        provideMockBoidsService()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
