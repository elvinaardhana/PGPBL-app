import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent  implements OnInit {

  @Input() message: string='';
  @Input() error: string='';
  @Input() field: AbstractControl | null = null;

  constructor() { }

  ngOnInit() {}

  shouldShowComponent(): boolean {
    return (this.field?.touched ?? false) && !!this.field?.errors?.[this.error];
  }

  getErrorMessage(): string | null {
    if (this.field?.errors) {
      if (this.field.errors[this.error]) {
        return this.message;
      }
    }
    return null;
  }

}