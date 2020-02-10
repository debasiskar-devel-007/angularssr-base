/**
 * @fileoverview added by tsickle
 * Generated from: lib/youtubeplayer/youtubeplayer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class YoutubeplayerComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set videoid(id) {
        this.id = (id) || '<no name set>';
        this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
YoutubeplayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-youtubeplayer',
                template: "\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                styles: [""]
            }] }
];
/** @nocollapse */
YoutubeplayerComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
YoutubeplayerComponent.propDecorators = {
    videoid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    YoutubeplayerComponent.prototype.id;
    /** @type {?} */
    YoutubeplayerComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi95b3V0dWJlcGxheWVyL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVyxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT3pELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFRakMsWUFBbUIsU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtJQUFJLENBQUM7Ozs7O0lBTDlDLElBQ0ksT0FBTyxDQUFDLEVBQU87UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGVBQWUsQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsZ0NBQWdDLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7OztJQUdELFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDZMQUE2Qzs7YUFFOUM7Ozs7WUFOUSxZQUFZOzs7c0JBVWxCLEtBQUs7Ozs7SUFGTixvQ0FBTzs7SUFPSywyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWIteW91dHViZXBsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi95b3V0dWJlcGxheWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4veW91dHViZXBsYXllci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgWW91dHViZXBsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlkOmFueTtcblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCB2aWRlb2lkKGlkOiBhbnkpIHtcbiAgICB0aGlzLmlkID0gKGlkKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5pZCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJytpZCk7XG4gIH1cbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjpEb21TYW5pdGl6ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==