import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { inputAttrToBoolean } from '../help';

@Component({
  selector: 'ui-switch',
  templateUrl: './switch.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SwitchComponent,
    multi: true
  }]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input()
  set disabled(isDisabled: any) {
    this._disabled = inputAttrToBoolean(isDisabled);
  }

  get disabled() {
    return this._disabled;
  }

  @Input()
  set readonly(isReadonly: any) {
    this._readonly = inputAttrToBoolean(isReadonly);
  }

  get readonly() {
    return this._readonly;
  }

  @Input()
  @HostBinding('class.ui-checked')
  set checked(isChecked: any) {
    this._checked = inputAttrToBoolean(isChecked);
  }

  get checked() {
    return this._checked;
  }

  @Input()
  forId: string;
  @Input()
  value: string = '';
  @Input()
  name: string;
  @Output()
  uiChange = new EventEmitter<boolean>();

  private onChange: (_: any) => void;
  private onTouched: () => void;
  private _disabled: boolean;
  private _readonly: boolean;
  private _checked: boolean;

  @HostListener('click')
  click() {
    if (this.disabled || this.readonly) {
      return;
    }
    this.checked = !this.checked;
    if (this.onChange) {
      this.onChange(this.checked);
    }
    if (this.onTouched) {
      this.onTouched();
    }
    this.uiChange.emit(this.checked);
  }

  writeValue(value: any) {
    this.checked = !!value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}