import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appRepoHover]'
})
export class RepoHoverDirective {

  constructor(private elem: ElementRef) { }
  @HostListener("mouseenter") onMouseEnter() {
    this.overlay("rgba(0,0,0,0.1)");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.overlay(null);
  }
  private overlay(color: any) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
