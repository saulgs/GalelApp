import { Directive, Renderer, ElementRef } from '@angular/core';

/**
 * Generated class for the AutoHideDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[auto-hide]', // Attribute selector
  host:{
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class AutoHideDirective {

  fabToHide;
  oldScrollTop: number = 0;

  constructor(public renderer: Renderer, public element: ElementRef) {
    console.log('Hello AutoHideDirective Directive');
  }

  ngOnInit(){
    this.fabToHide = this.element.nativeElement.getElementsByClassName("fab")[0];
    this.renderer.setElementStyle(this.fabToHide, "webkitTransition", "transform 500ms, opacity 500ms");
  }

  onContentScroll(e){
    if(e.scrollTop - this.oldScrollTop > 10){
      console.log("down");
      this.renderer.setElementStyle(this.fabToHide, "opacity", "0");
      this.renderer.setElementStyle(this.fabToHide, "webkitTransform", "scale3d(.1,.1,.1)");
    }else if(e.scrollTop - this.oldScrollTop < 0){
      console.log("up");
      this.renderer.setElementStyle(this.fabToHide, "opacity", "1");
      this.renderer.setElementStyle(this.fabToHide, "webkitTransform", "scale3d(1,1,1)");
    }
    this.oldScrollTop = e.scrollTop;
  }

}
