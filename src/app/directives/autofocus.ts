import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  private element = inject(ElementRef);
  ngOnInit(): void {
    this.element.nativeElement.focus();
  }
}
