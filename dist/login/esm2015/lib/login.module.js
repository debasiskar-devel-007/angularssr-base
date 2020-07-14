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
export class LoginModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4tbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL2xvZ2luLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBMkJ4QyxNQUFNLE9BQU8sV0FBVzs7O1lBekJ2QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLHNCQUFzQjtpQkFHdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixDQUFDO2dCQUMzRixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDO2dCQUNsQyxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDbkQsZUFBZSxFQUFFLENBQUUscUJBQXFCLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7YUFDckYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2lnblVwQ29tcG9uZW50LCBzdWNjZXNzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsIHNuYWNrQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50LCBzbmFja0JhclJlc2V0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgcHJldnJvdXRlIH0gZnJvbSAnLi9wcmV2cm91dGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBTaWduVXBDb21wb25lbnQsXG4gICAgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgUmVzZXRQYXNzd29yZENvbXBvbmVudCxcbiAgICBzdWNjZXNzTW9kYWxDb21wb25lbnQsXG4gICAgc25hY2tCYXJDb21wb25lbnQsXG4gICAgc25hY2tCYXJSZXNldENvbXBvbmVudCxcbiAgICAvLyBjb21tb25Nb2RhbENvbXBvbmVudFxuXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTG9naW5Db21wb25lbnQsIFNpZ25VcENvbXBvbmVudCwgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsIFJlc2V0UGFzc3dvcmRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlLCBwcmV2cm91dGVdLFxuICBib290c3RyYXA6IFtdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQV0sXG4gIGVudHJ5Q29tcG9uZW50czogWyBzdWNjZXNzTW9kYWxDb21wb25lbnQsIHNuYWNrQmFyQ29tcG9uZW50LCBzbmFja0JhclJlc2V0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH1cbiJdfQ==