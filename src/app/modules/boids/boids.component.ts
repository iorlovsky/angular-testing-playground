import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boids',
  templateUrl: './boids.component.html',
  styleUrls: ['./boids.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoidsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
