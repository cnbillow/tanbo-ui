import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIDirectivesModule } from '../ui-directives/ui-directives.module';

import { AppComponent } from './components/app/app.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { DropDownFixedComponent } from './components/drop-down-fixed/drop-down-fixed.component';
import { DropDownMenuComponent } from './components/drop-down-menu/drop-down-menu.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { NotifyComponent } from './components/notify/notify.component';
import { StarrySkyComponent } from './components/starry-sky/starry-sky.component';
import { ViewLoadingBarComponent } from './components/view-loading-bar/view-loading-bar.component';
import { ToolbarComponent } from './components/toolbar/ui-toolbar.component';
import { SlideComponent } from './components/slide/slide.component';
import { SlideItemComponent } from './components/slide-item/slide-item.component';

import { ConfirmController } from './components/confirm/confirm-controller.service';
import { NotifyController } from './components/notify/notify-controller.service';

@NgModule({
    imports: [
        CommonModule,
        UIDirectivesModule
    ],
    declarations: [
        AppComponent,
        DropDownComponent,
        DropDownFixedComponent,
        DropDownMenuComponent,
        PaginationComponent,
        ConfirmComponent,
        NotifyComponent,
        StarrySkyComponent,
        ViewLoadingBarComponent,
        ToolbarComponent,
        SlideComponent,
        SlideItemComponent
    ],
    exports: [
        AppComponent,
        DropDownComponent,
        DropDownFixedComponent,
        DropDownMenuComponent,
        PaginationComponent,
        StarrySkyComponent,
        ViewLoadingBarComponent,
        ToolbarComponent,
        SlideComponent,
        SlideItemComponent
    ],
    providers: [
        NotifyController,
        ConfirmController
    ]
})
export class UIComponentsModule {
}
