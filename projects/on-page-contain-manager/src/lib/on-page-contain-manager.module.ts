import { NgModule } from '@angular/core';
import { OnPageContainManagerComponent } from './on-page-contain-manager.component';
import { MaterialModule } from './Module/material-module';
import { DialogComponent } from './component/common/dialog/dialog.component';

@NgModule({
  declarations: [OnPageContainManagerComponent, DialogComponent],
  imports: [
    MaterialModule,
  ],
  exports: [OnPageContainManagerComponent],
  entryComponents:[DialogComponent]
})

export class OnPageContainManagerModule { }
