/*
 Custom validators to use everywhere.
 */
import {FormControl} from '@angular/forms';

// SINGLE FIELD VALIDATORS
export function emailValidator(control: FormControl): {[key: string]: any} {
  var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value && !emailRegexp.test(control.value)) {
    return {invalidEmail: true};
  }
}

export function passwordValidator(control: FormControl):{[key:string]:any}{
  var passwordRegexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
  if (control.value && !passwordRegexp.test(control.value)) {
    return {invalidPassword: true};
  }
}

export function phoneValidator(control: FormControl):{[key:string]:any}{
  var phoneRegexp = /^\+?[0-9-]+(?:;\+?[0-9-]+)*$/gm;
  if (control.value && !phoneRegexp.test(control.value)) {
    return {invalidPhone: true};
  }
}
//
// //CONTROL GROUP VALIDATORS
// export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
//   return (group: Control): {[key: string]: any} => {
//     let password = group.controls[passwordKey];
//     let confirmPassword = group.controls[confirmPasswordKey];
//
//     if (password.value !== confirmPassword.value) {
//       return {
//         mismatchedPasswords: true
//       };
//     }
//   }
// }

