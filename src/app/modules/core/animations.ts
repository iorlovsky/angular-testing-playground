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

export function fadeIn(duration: number = 250): AnimationReferenceMetadata {
  return animation([
    style({ opacity: 0 }),
    animate(`${duration}ms ease-in`, style({ opacity: 1 }))
  ]);
}

export function fadeOut(duration: number = 250): AnimationReferenceMetadata {
  return animation([
    style({ opacity: 1 }),
    animate(`${duration}ms ease-in`, style({ opacity: 0 }))
  ]);
}
