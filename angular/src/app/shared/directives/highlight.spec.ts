import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(new ElementRef(document.createElement('p')));
    expect(directive).toBeTruthy();
  });
});
