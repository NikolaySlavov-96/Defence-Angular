import { FormGroup, ValidatorFn } from "@angular/forms";


export function sameValueGroupValidator(param1: string, param2: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        return group.get(param1)?.value === group.get(param2)?.value ? null : { sameValueGroupValidator: true }
    };
}