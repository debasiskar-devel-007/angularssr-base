/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent, successModalComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent, snackBarComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent, snackBarResetComponent } from './reset-password/reset-password.component';
import { ApiService } from './api.service';
import { prevroute } from './prevroute';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        LoginComponent,
                        SignUpComponent,
                        ForgetPasswordComponent,
                        ResetPasswordComponent,
                        successModalComponent,
                        snackBarComponent,
                        snackBarResetComponent,
                    ],
                    imports: [
                        DemoMaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        HttpClientModule
                    ],
                    exports: [LoginComponent, SignUpComponent, ForgetPasswordComponent, ResetPasswordComponent],
                    providers: [ApiService, prevroute],
                    bootstrap: [],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    entryComponents: [successModalComponent, snackBarComponent, snackBarResetComponent]
                },] }
    ];
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDO0lBQUE7SUF5QjJCLENBQUM7O2dCQXpCM0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixzQkFBc0I7cUJBR3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsQ0FBQztvQkFDM0YsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQztvQkFDbEMsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ25ELGVBQWUsRUFBRSxDQUFFLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDO2lCQUNyRjs7SUFDMEIsa0JBQUM7Q0FBQSxBQXpCNUIsSUF5QjRCO1NBQWYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IERlbW9NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwtbW9kdWxlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTaWduVXBDb21wb25lbnQsIHN1Y2Nlc3NNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JnZXRQYXNzd29yZENvbXBvbmVudCwgc25hY2tCYXJDb21wb25lbnQgfSBmcm9tICcuL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRDb21wb25lbnQsIHNuYWNrQmFyUmVzZXRDb21wb25lbnQgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBwcmV2cm91dGUgfSBmcm9tICcuL3ByZXZyb3V0ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFNpZ25VcENvbXBvbmVudCxcbiAgICBGb3JnZXRQYXNzd29yZENvbXBvbmVudCxcbiAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIHN1Y2Nlc3NNb2RhbENvbXBvbmVudCxcbiAgICBzbmFja0JhckNvbXBvbmVudCxcbiAgICBzbmFja0JhclJlc2V0Q29tcG9uZW50LFxuICAgIC8vIGNvbW1vbk1vZGFsQ29tcG9uZW50XG5cbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMb2dpbkNvbXBvbmVudCwgU2lnblVwQ29tcG9uZW50LCBGb3JnZXRQYXNzd29yZENvbXBvbmVudCwgUmVzZXRQYXNzd29yZENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2UsIHByZXZyb3V0ZV0sXG4gIGJvb3RzdHJhcDogW10sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOT19FUlJPUlNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOiBbIHN1Y2Nlc3NNb2RhbENvbXBvbmVudCwgc25hY2tCYXJDb21wb25lbnQsIHNuYWNrQmFyUmVzZXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuIl19