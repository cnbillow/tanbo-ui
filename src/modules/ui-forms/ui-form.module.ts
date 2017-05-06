import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from '../ui-components/ui-components.module';

import { UiCheckboxRequiredValidatorDirective } from './directives/required-validator.directive';
import { ModelValidatorDirective } from './directives/model-validator.directive';
import { FormValidatorDirective } from './directives/form-validator.directive';
import { InputHostDirective } from './directives/input-host.directive';

import { SelectComponent } from './components/select/select.component';
import { OptionComponent } from './components/option/option.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { RangeComponent } from './components/range/range.component';

@NgModule({
    imports: [
        CommonModule,
        UiComponentsModule
    ],
    declarations: [
        SelectComponent,
        OptionComponent,
        InputComponent,
        CheckboxComponent,
        RadioComponent,
        RangeComponent,

        UiCheckboxRequiredValidatorDirective,
        ModelValidatorDirective,
        FormValidatorDirective,
        InputHostDirective
    ],
    entryComponents: [
        CheckboxComponent,
        RadioComponent,
        RangeComponent
    ],
    exports: [
        SelectComponent,
        OptionComponent,
        InputComponent,

        UiCheckboxRequiredValidatorDirective,
        ModelValidatorDirective,
        FormValidatorDirective
    ]
})
export class UiFormsModule {
}