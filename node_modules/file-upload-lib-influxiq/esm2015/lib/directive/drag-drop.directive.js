/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
export class DragDropDirective {
    constructor() {
        // @Output() onFileDropped = new EventEmitter<any>();
        this.onFileDropped = new EventEmitter();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Dragover listener
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    }
    //Dragleave listener
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Drop listener
    /**
     * @param {?} evt
     * @return {?}
     */
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        /** @type {?} */
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
            // this.onFileDropped.emit(evt);
        }
    }
}
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
if (false) {
    /** @type {?} */
    DragDropDirective.prototype.onFileDropped;
    /** @type {?} */
    DragDropDirective.prototype.background;
    /** @type {?} */
    DragDropDirective.prototype.opacity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZpbGUtdXBsb2FkLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvZHJhZy1kcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVMsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNbEcsTUFBTSxPQUFPLGlCQUFpQjtJQUo5Qjs7UUFPWSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHSixlQUFVLEdBQUcsU0FBUyxDQUFBO1FBQy9CLFlBQU8sR0FBRyxHQUFHLENBQUE7SUErQnBELENBQUM7Ozs7OztJQTVCdUMsVUFBVSxDQUFDLEdBQU87UUFDdEQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDOzs7Ozs7SUFHNkMsV0FBVyxDQUFDLEdBQU87UUFDL0QsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtJQUNwQixDQUFDOzs7Ozs7SUFHd0MsTUFBTSxDQUFDLEdBQU87UUFDckQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTs7WUFDZCxLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLO1FBQ2xDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsZ0NBQWdDO1NBRWpDO0lBQ0gsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7OzRCQUtFLE1BQU07eUJBR04sV0FBVyxTQUFDLHdCQUF3QjtzQkFDcEMsV0FBVyxTQUFDLGVBQWU7eUJBRzNCLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBUW5DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBUXBDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUF2QmhDLDBDQUFrRDs7SUFHbEQsdUNBQW9FOztJQUNwRSxvQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGliRHJhZ0Ryb3BdJ1xufSlcblxuZXhwb3J0IGNsYXNzIERyYWdEcm9wRGlyZWN0aXZlIHtcblx0XG4gIC8vIEBPdXRwdXQoKSBvbkZpbGVEcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkZpbGVEcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0XG4gIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZC1jb2xvcicpIHB1YmxpYyBiYWNrZ3JvdW5kID0gJyNmNWZjZmYnXG4gIEBIb3N0QmluZGluZygnc3R5bGUub3BhY2l0eScpIHB1YmxpYyBvcGFjaXR5ID0gJzEnXG5cdFxuICAvL0RyYWdvdmVyIGxpc3RlbmVyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgb25EcmFnT3ZlcihldnQ6YW55KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9ICcjOWVjYmVjJztcbiAgICB0aGlzLm9wYWNpdHkgPSAnMC44J1xuICB9XG5cdFxuICAvL0RyYWdsZWF2ZSBsaXN0ZW5lclxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKSBwdWJsaWMgb25EcmFnTGVhdmUoZXZ0OmFueSkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSAnI2Y1ZmNmZidcbiAgICB0aGlzLm9wYWNpdHkgPSAnMSdcbiAgfVxuXHRcbiAgLy9Ecm9wIGxpc3RlbmVyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKSBwdWJsaWMgb25kcm9wKGV2dDphbnkpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gJyNmNWZjZmYnXG4gICAgdGhpcy5vcGFjaXR5ID0gJzEnXG4gICAgbGV0IGZpbGVzID0gZXZ0LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vbkZpbGVEcm9wcGVkLmVtaXQoZmlsZXMpO1xuICAgICAgLy8gdGhpcy5vbkZpbGVEcm9wcGVkLmVtaXQoZXZ0KTtcblxuICAgIH1cbiAgfVxufSJdfQ==