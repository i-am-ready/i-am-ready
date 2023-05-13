import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'iar-ready-level-slider',
  templateUrl: './ready-level-slider.component.html',
  styleUrls: ['./ready-level-slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReadyLevelSliderComponent),
      multi: true
    },
  ]
})
export class ReadyLevelSliderComponent implements ControlValueAccessor {

  @Input() max = 5;

  level = this.max;

  get labels(): string[] {
    return [...Array(this.max).keys()].map(level => this.getLevelLabel(level + 1));
  }

  getLevelLabel(level: number): string {
    switch (level) {
      case 1:
        return "I'm not ready";
      case 2:
        return "I'm not ready, but I would like";
      case 3:
        return "I'm not ready, but I must";
      case 4:
        return "I'm ready";
      case 5:
        return "I'm full ready and motivated";
    }
    return `Level ${level}`;
  }

  onChange: any = () => '';
  onTouch: any = () => '';

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(level: number): void {
    this.level = level;
  }

  levelChange(level: number) {
    this.onChange(level);
  }
}
