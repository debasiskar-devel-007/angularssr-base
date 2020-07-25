/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
var DragDropDirective = /** @class */ (function () {
    function DragDropDirective() {
        // @Output() onFileDropped = new EventEmitter<any>();
        this.onFileDropped = new EventEmitter();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Dragover listener
    //Dragover listener
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragOver = 
    //Dragover listener
    /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    };
    //Dragleave listener
    //Dragleave listener
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.onDragLeave = 
    //Dragleave listener
    /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    };
    //Drop listener
    //Drop listener
    /**
     * @param {?} evt
     * @return {?}
     */
    DragDropDirective.prototype.ondrop = 
    //Drop listener
    /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        /** @type {?} */
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
            // this.onFileDropped.emit(evt);
        }
    };
    DragDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libDragDrop]'
                },] }
    ];
    DragDropDirective.propDecorators = {
        onFileDropped: [{ type: Output }],
        background: [{ type: HostBinding, args: ['style.background-color',] }],
        opacity: [{ type: HostBinding, args: ['style.opacity',] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
        ondrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return DragDropDirective;
}());
export { DragDropDirective };
if (false) {
    /** @type {?} */
    DragDropDirective.prototype.onFileDropped;
    /** @type {?} */
    DragDropDirective.prototype.background;
    /** @type {?} */
    DragDropDirective.prototype.opacity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpbGUtdXBsb2FkLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvZHJhZy1kcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEc7SUFBQTs7UUFPWSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHSixlQUFVLEdBQUcsU0FBUyxDQUFBO1FBQy9CLFlBQU8sR0FBRyxHQUFHLENBQUE7SUErQnBELENBQUM7SUE3QkMsbUJBQW1COzs7Ozs7SUFDbUIsc0NBQVU7Ozs7OztJQUFoRCxVQUFpRCxHQUFPO1FBQ3RELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUVELG9CQUFvQjs7Ozs7O0lBQzBCLHVDQUFXOzs7Ozs7SUFBekQsVUFBMEQsR0FBTztRQUMvRCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxlQUFlOzs7Ozs7SUFDMEIsa0NBQU07Ozs7OztJQUEvQyxVQUFnRCxHQUFPO1FBQ3JELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7O1lBQ2QsS0FBSyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSztRQUNsQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLGdDQUFnQztTQUVqQztJQUNILENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7Z0NBS0UsTUFBTTs2QkFHTixXQUFXLFNBQUMsd0JBQXdCOzBCQUNwQyxXQUFXLFNBQUMsZUFBZTs2QkFHM0IsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFRbkMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFRcEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFZbEMsd0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXRDWSxpQkFBaUI7OztJQUc1QiwwQ0FBa0Q7O0lBR2xELHVDQUFvRTs7SUFDcEUsb0NBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xpYkRyYWdEcm9wXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEcmFnRHJvcERpcmVjdGl2ZSB7XG5cdFxuICAvLyBAT3V0cHV0KCkgb25GaWxlRHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25GaWxlRHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdFxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJhY2tncm91bmQtY29sb3InKSBwdWJsaWMgYmFja2dyb3VuZCA9ICcjZjVmY2ZmJ1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9wYWNpdHknKSBwdWJsaWMgb3BhY2l0eSA9ICcxJ1xuXHRcbiAgLy9EcmFnb3ZlciBsaXN0ZW5lclxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pIG9uRHJhZ092ZXIoZXZ0OmFueSkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSAnIzllY2JlYyc7XG4gICAgdGhpcy5vcGFjaXR5ID0gJzAuOCdcbiAgfVxuXHRcbiAgLy9EcmFnbGVhdmUgbGlzdGVuZXJcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgcHVibGljIG9uRHJhZ0xlYXZlKGV2dDphbnkpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmNWZjZmYnXG4gICAgdGhpcy5vcGFjaXR5ID0gJzEnXG4gIH1cblx0XG4gIC8vRHJvcCBsaXN0ZW5lclxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSkgcHVibGljIG9uZHJvcChldnQ6YW55KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjZjVmY2ZmJ1xuICAgIHRoaXMub3BhY2l0eSA9ICcxJ1xuICAgIGxldCBmaWxlcyA9IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub25GaWxlRHJvcHBlZC5lbWl0KGZpbGVzKTtcbiAgICAgIC8vIHRoaXMub25GaWxlRHJvcHBlZC5lbWl0KGV2dCk7XG5cbiAgICB9XG4gIH1cbn0iXX0=