/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from './Module/material-module';
import { CategoryManagementComponent } from './category-management.component';
import { ListCategoryComponent } from './component/list-category/list-category.component';
import { AddEditCategoryComponent } from './component/add-edit-category/add-edit-category.component';
import { HttpClientModule } from '@angular/common/http';
import { ListingModule } from "listing-angular7";
var CategoryManagementModule = /** @class */ (function () {
    function CategoryManagementModule() {
    }
    CategoryManagementModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        CategoryManagementComponent,
                        ListCategoryComponent,
                        AddEditCategoryComponent
                    ],
                    imports: [
                        BrowserModule,
                        MaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        ListingModule,
                    ],
                    exports: [
                        CategoryManagementComponent,
                        AddEditCategoryComponent
                    ]
                },] }
    ];
    return CategoryManagementModule;
}());
export { CategoryManagementModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXRlZ29yeS1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NhdGVnb3J5LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRXJHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQUFBO0lBbUJ3QyxDQUFDOztnQkFuQnhDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osMkJBQTJCO3dCQUMzQixxQkFBcUI7d0JBQ3JCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCwyQkFBMkI7d0JBQzNCLHdCQUF3QjtxQkFDekI7aUJBQ0Y7O0lBQ3VDLCtCQUFDO0NBQUEsQUFuQnpDLElBbUJ5QztTQUE1Qix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vTW9kdWxlL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBDYXRlZ29yeU1hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3J5LW1hbmFnZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2xpc3QtY2F0ZWdvcnkvbGlzdC1jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYWRkLWVkaXQtY2F0ZWdvcnkvYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTGlzdGluZ01vZHVsZSB9IGZyb20gXCJsaXN0aW5nLWFuZ3VsYXI3XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhdGVnb3J5TWFuYWdlbWVudENvbXBvbmVudCxcbiAgICBMaXN0Q2F0ZWdvcnlDb21wb25lbnQsXG4gICAgQWRkRWRpdENhdGVnb3J5Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2F0ZWdvcnlNYW5hZ2VtZW50Q29tcG9uZW50LFxuICAgIEFkZEVkaXRDYXRlZ29yeUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5TWFuYWdlbWVudE1vZHVsZSB7IH1cbiJdfQ==