import { FormGroup } from '@angular/forms';

export class User{
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    message: string;
    static formToObject(form: FormGroup): User {
        const obj: User = new User();
        obj.firstName = form.value.firstName;
        obj.lastName = form.value.lastName;
        obj.email = form.value.email;
        obj.phone = form.value.phone;
        obj.message = form.value.message;
        return obj;
    }
}