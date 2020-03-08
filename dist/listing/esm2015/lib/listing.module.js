/**
 * @fileoverview added by tsickle
 * Generated from: lib/listing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListingComponent, Confirmdialog, BottomSheet } from './listing.component';
import { DemoMaterialModule } from './materialmodules';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
//import { FooterComponent } from './footer/footer.component';
//import { MyfromComponent } from './myfrom/myfrom.component';
//import {DynamicFieldDirective} from "./myfrom/dynamic-field.directive";
//import { MatFileUploadModule } from 'angular-material-fileupload';
//import {NgxUploaderModule} from "ngx-uploader";
//import {RouterModule} from "@angular/router";
// import { FieldConfig } from './myfrom/field.interface';
// import { DynamicFieldDirective } from './myfrom/dynamic-field.directive';
// import { DynamicFormBuilderComponent } from '../lib/dynamic-form-builder/dynamic-form-builder.component';
/*
import { FieldBuilderComponent } from '../lib/dynamic-form-builder/field-builder/field-builder.component';
import { TextBoxComponent } from '../lib/dynamic-form-builder/atoms/textbox';
import { DropDownComponent } from '../lib/dynamic-form-builder/atoms/dropdown';
import { FileComponent } from '../lib/dynamic-form-builder/atoms/file';
import { CheckBoxComponent } from '../lib/dynamic-form-builder/atoms/checkbox';
import { RadioComponent } from '../lib/dynamic-form-builder/atoms/radio';
*/
import { MomentModule } from 'ngx-moment';
import { RouterModule } from "@angular/router";
//import { SinglepostComponent } from './singlepost/singlepost.component';
export class ListingModule {
}
ListingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ListingComponent, Confirmdialog, BottomSheet],
                imports: [
                    CommonModule,
                    BrowserModule, BrowserAnimationsModule,
                    DemoMaterialModule,
                    FormsModule, ReactiveFormsModule,
                    RouterModule,
                    MomentModule
                    // DynamicFieldDirective,
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ListingComponent,
                ],
                providers: [ApiService],
                entryComponents: [Confirmdialog, BottomSheet],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBYSxzQkFBc0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBQyxXQUFXLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBd0I3QyxNQUFNLE9BQU8sYUFBYTs7O1lBbkJ6QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLFdBQVcsQ0FBQztnQkFDeEQsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osYUFBYSxFQUFFLHVCQUF1QjtvQkFDdEMsa0JBQWtCO29CQUNsQixXQUFXLEVBQUUsbUJBQW1CO29CQUMvQixZQUFZO29CQUNiLFlBQVk7b0JBQ1oseUJBQXlCO2lCQUU1QjtnQkFDRCxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtnQkFDckMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCO2lCQUVyQjtnQkFDTCxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLGVBQWUsRUFBQyxDQUFDLGFBQWEsRUFBQyxXQUFXLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDb21wb25lbnQsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0fSBmcm9tICcuL2xpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7RGVtb01hdGVyaWFsTW9kdWxlfSBmcm9tICcuL21hdGVyaWFsbW9kdWxlcyc7XG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG4vL2ltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuLy9pbXBvcnQgeyBNeWZyb21Db21wb25lbnQgfSBmcm9tICcuL215ZnJvbS9teWZyb20uY29tcG9uZW50Jztcbi8vaW1wb3J0IHtEeW5hbWljRmllbGREaXJlY3RpdmV9IGZyb20gXCIuL215ZnJvbS9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZVwiO1xuLy9pbXBvcnQgeyBNYXRGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1tYXRlcmlhbC1maWxldXBsb2FkJztcbi8vaW1wb3J0IHtOZ3hVcGxvYWRlck1vZHVsZX0gZnJvbSBcIm5neC11cGxvYWRlclwiO1xuLy9pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuL215ZnJvbS9maWVsZC5pbnRlcmZhY2UnO1xuLy8gaW1wb3J0IHsgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9teWZyb20vZHluYW1pYy1maWVsZC5kaXJlY3RpdmUnO1xuLy8gaW1wb3J0IHsgRHluYW1pY0Zvcm1CdWlsZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2R5bmFtaWMtZm9ybS1idWlsZGVyLmNvbXBvbmVudCc7XG4vKlxuaW1wb3J0IHsgRmllbGRCdWlsZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2ZpZWxkLWJ1aWxkZXIvZmllbGQtYnVpbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dEJveENvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy90ZXh0Ym94JztcbmltcG9ydCB7IERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2R5bmFtaWMtZm9ybS1idWlsZGVyL2F0b21zL2Ryb3Bkb3duJztcbmltcG9ydCB7IEZpbGVDb21wb25lbnQgfSBmcm9tICcuLi9saWIvZHluYW1pYy1mb3JtLWJ1aWxkZXIvYXRvbXMvZmlsZSc7XG5pbXBvcnQgeyBDaGVja0JveENvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9jaGVja2JveCc7XG5pbXBvcnQgeyBSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9keW5hbWljLWZvcm0tYnVpbGRlci9hdG9tcy9yYWRpbyc7XG4qL1xuaW1wb3J0IHsgTW9tZW50TW9kdWxlIH0gZnJvbSAnbmd4LW1vbWVudCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuLy9pbXBvcnQgeyBTaW5nbGVwb3N0Q29tcG9uZW50IH0gZnJvbSAnLi9zaW5nbGVwb3N0L3NpbmdsZXBvc3QuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xpc3RpbmdDb21wb25lbnQsQ29uZmlybWRpYWxvZyxCb3R0b21TaGVldF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBNb21lbnRNb2R1bGVcbiAgICAgICAgLy8gRHluYW1pY0ZpZWxkRGlyZWN0aXZlLFxuXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgZXhwb3J0czogW0xpc3RpbmdDb21wb25lbnQsXG4gICAgICAvL015ZnJvbUNvbXBvbmVudCxcbiAgICAgIF0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6W0NvbmZpcm1kaWFsb2csQm90dG9tU2hlZXRdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nTW9kdWxlIHtcbiAgLy8gZmllbGQ6IEZpZWxkQ29uZmlnO1xuICAvLyBncm91cDogRm9ybUdyb3VwO1xuXG59XG4iXX0=