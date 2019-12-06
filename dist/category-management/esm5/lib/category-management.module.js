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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbWFuYWdlbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXRlZ29yeS1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NhdGVnb3J5LW1hbmFnZW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQUFBO0lBbUJ3QyxDQUFDOztnQkFuQnhDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osMkJBQTJCO3dCQUMzQixxQkFBcUI7d0JBQ3JCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCwyQkFBMkI7d0JBQzNCLHdCQUF3QjtxQkFDekI7aUJBQ0Y7O0lBQ3VDLCtCQUFDO0NBQUEsQUFuQnpDLElBbUJ5QztTQUE1Qix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vTW9kdWxlL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBDYXRlZ29yeU1hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3J5LW1hbmFnZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2xpc3QtY2F0ZWdvcnkvbGlzdC1jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvYWRkLWVkaXQtY2F0ZWdvcnkvYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSBcImxpc3RpbmctYW5ndWxhcjdcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2F0ZWdvcnlNYW5hZ2VtZW50Q29tcG9uZW50LFxuICAgIExpc3RDYXRlZ29yeUNvbXBvbmVudCxcbiAgICBBZGRFZGl0Q2F0ZWdvcnlDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYXRlZ29yeU1hbmFnZW1lbnRDb21wb25lbnQsXG4gICAgQWRkRWRpdENhdGVnb3J5Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlNYW5hZ2VtZW50TW9kdWxlIHsgfVxuIl19