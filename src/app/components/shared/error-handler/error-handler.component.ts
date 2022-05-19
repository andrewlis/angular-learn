import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {
  @Input() public control: AbstractControl | null;
  @Input() private customErrors: { [key: string]: string };

  public errors$: Observable<string> | undefined = of('');


  public errorDescriptions: { [key: string]: string } = {
    required: 'Поле обязательно для заполнения',
    email: 'Некорректный формат почты',
    minlength: 'Длинна должна быть более 6 символов'
  }

  ngOnInit(): void {
    // есть задержки, при выделении всего поля и удалении срабатывает value changes в родительском компоненте
    // но не доходит сюда, так же не срабатывает markAllAsTouched для отображения ошибки
    this.errors$ = this.control?.statusChanges.pipe(
      filter(() => !!this.control?.errors),
      map(() => Object.keys(this.control?.errors as Object)[0]),
      map((error) => {
        return this.errorDescriptions[error];
      }),
      // помогает убирать некоторые задержки
      shareReplay(1),
    )
  }

}
