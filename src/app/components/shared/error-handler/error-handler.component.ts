import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animation', [
      state('void',
        style({
          transform: 'translateY(20px)'
        })
      ),
      state('*', style({ transform: 'translateY(0)', })),
      transition(':enter', animate(`200ms ease-out`)),
      transition(':leave', animate(`200ms ease-in`))
    ])
  ],
})
export class ErrorHandlerComponent implements OnChanges {
  @Input() public controlErrors: ValidationErrors | null | undefined;
  @Input() private customErrors: { [key: string]: string } = {};

  public errors: string;

  public errorDescriptions: { [key: string]: string } = {
    required: 'Поле обязательно для заполнения',
    email: 'Некорректный формат почты',
    minlength: 'Длинна должна быть более 6 символов'
  }

  ngOnChanges(): void {
    if (this.controlErrors) {
      let firstError = Object.keys(this.controlErrors as ValidationErrors)[0];
      this.errors = this.errorDescriptions[firstError];
    } else {
      this.errors = ''
    }
  }
}
