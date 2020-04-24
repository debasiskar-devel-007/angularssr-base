/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FileUploadComponent } from './file-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './Module/material-module';
import { HttpClientModule } from '@angular/common/http';
import { ListingModule } from "listing-angular7";
import { DragDropDirective } from './directive/drag-drop.directive';
import { AlertMessageComponent } from './component/alert-message/alert-message.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { PreviewFilesComponent } from './component/preview-files/preview-files.component';
import { ImageCropperModule } from 'ngx-image-cropper';
var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FileUploadComponent,
                        DragDropDirective,
                        AlertMessageComponent,
                        DialogBoxComponent,
                        PreviewFilesComponent
                    ],
                    imports: [
                        BrowserModule,
                        MaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        ListingModule,
                        ImageCropperModule
                    ],
                    providers: [],
                    exports: [FileUploadComponent],
                    entryComponents: [
                        AlertMessageComponent,
                        DialogBoxComponent,
                        PreviewFilesComponent
                    ]
                },] }
    ];
    return FileUploadModule;
}());
export { FileUploadModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmlsZS11cGxvYWQtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2ZpbGUtdXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHdkQ7SUFBQTtJQXlCZ0MsQ0FBQzs7Z0JBekJoQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2Isa0JBQWtCO3FCQUNuQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDOUIsZUFBZSxFQUFFO3dCQUNmLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixxQkFBcUI7cUJBQ3RCO2lCQUNGOztJQUMrQix1QkFBQztDQUFBLEFBekJqQyxJQXlCaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbGVVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9Nb2R1bGUvbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSBcImxpc3RpbmctYW5ndWxhcjdcIjtcbmltcG9ydCB7IERyYWdEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvZHJhZy1kcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBbGVydE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9hbGVydC1tZXNzYWdlL2FsZXJ0LW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERpYWxvZ0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJldmlld0ZpbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvcHJldmlldy1maWxlcy9wcmV2aWV3LWZpbGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmlsZVVwbG9hZENvbXBvbmVudCxcbiAgICBEcmFnRHJvcERpcmVjdGl2ZSxcbiAgICBBbGVydE1lc3NhZ2VDb21wb25lbnQsXG4gICAgRGlhbG9nQm94Q29tcG9uZW50LFxuICAgIFByZXZpZXdGaWxlc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBJbWFnZUNyb3BwZXJNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW0ZpbGVVcGxvYWRDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBBbGVydE1lc3NhZ2VDb21wb25lbnQsXG4gICAgRGlhbG9nQm94Q29tcG9uZW50LFxuICAgIFByZXZpZXdGaWxlc0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRNb2R1bGUgeyB9XG4iXX0=