import { animate, animation, style, AnimationReferenceMetadata } from '@angular/animations';

export function topSlideIn(height: number): AnimationReferenceMetadata {
  return animation([
    style({ transform: `translateY(-${height}px)` }),
    animate('250ms ease-in', style({ transform: 'translateY(0px)' }))
  ]);
}

export function topSlideOut(height: number): AnimationReferenceMetadata {
  return animation([
    style({ transform: 'translateY(0px)' }),
    animate('250ms ease-in', style({ transform: `translateY(-${height}px)` }))
  ]);
}
