import { PipeTransform, Pipe } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
    name: 'formFieldError',
    pure: false
})
export class FormFieldErrorPipe implements PipeTransform {

    constructor() { }

    transform(control: AbstractControl): string {
        if (control.hasError('required')) {
            return 'Please fill out this field';
        } else if (control.hasError('pattern')) {
            return 'This field has wrong format';
        }
    }

}
