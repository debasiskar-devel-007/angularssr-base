/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FromComponent } from './from.component';
import { TextBoxComponent } from './textbox/textbox.component';
import { DemoMaterialModule } from './material-module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var FromModule = /** @class */ (function () {
    function FromModule() {
    }
    FromModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FromComponent, TextBoxComponent],
                    imports: [
                        DemoMaterialModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        BrowserAnimationsModule
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                    exports: [FromComponent]
                },] }
    ];
    return FromModule;
}());
export { FromModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mcm9tLyIsInNvdXJjZXMiOlsibGliL2Zyb20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFO0lBQUE7SUFZMEIsQ0FBQzs7Z0JBWjFCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7b0JBQy9DLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFDLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ2xELE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDekI7O0lBQ3lCLGlCQUFDO0NBQUEsQUFaM0IsSUFZMkI7U0FBZCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZyb21Db21wb25lbnQgfSBmcm9tICcuL2Zyb20uY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRCb3hDb21wb25lbnQgfSBmcm9tICcuL3RleHRib3gvdGV4dGJveC5jb21wb25lbnQnO1xuaW1wb3J0IHtEZW1vTWF0ZXJpYWxNb2R1bGV9IGZyb20gJy4vbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRnJvbUNvbXBvbmVudCwgVGV4dEJveENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczpbTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gIGV4cG9ydHM6IFtGcm9tQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBGcm9tTW9kdWxlIHsgfVxuIl19