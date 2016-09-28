"use strict";
// SINGLE FIELD VALIDATORS
function emailValidator(control) {
    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
exports.emailValidator = emailValidator;
function passwordValidator(control) {
    var passwordRegexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
    if (control.value && !passwordRegexp.test(control.value)) {
        return { invalidPassword: true };
    }
}
exports.passwordValidator = passwordValidator;
function phoneValidator(control) {
    var phoneRegexp = /^\+?[0-9-]+(?:;\+?[0-9-]+)*$/gm;
    if (control.value && !phoneRegexp.test(control.value)) {
        return { invalidPhone: true };
    }
}
exports.phoneValidator = phoneValidator;
function englishValidator(control) {
    var emailRegexp = /^[A-Za-z]+$/i;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEnglish: true };
    }
}
exports.englishValidator = englishValidator;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9oZWxwZXJzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLDBCQUEwQjtBQUMxQix3QkFBK0IsT0FBb0I7SUFDakQsSUFBSSxXQUFXLEdBQUcsbUdBQW1HLENBQUM7SUFDdEgsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUM7QUFMZSxzQkFBYyxpQkFLN0IsQ0FBQTtBQUVELDJCQUFrQyxPQUFvQjtJQUNwRCxJQUFJLGNBQWMsR0FBRyxpRUFBaUUsQ0FBQztJQUN2RixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxFQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUNqQyxDQUFDO0FBQ0gsQ0FBQztBQUxlLHlCQUFpQixvQkFLaEMsQ0FBQTtBQUVELHdCQUErQixPQUFvQjtJQUNqRCxJQUFJLFdBQVcsR0FBRyxnQ0FBZ0MsQ0FBQztJQUNuRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUM5QixDQUFDO0FBQ0gsQ0FBQztBQUxlLHNCQUFjLGlCQUs3QixDQUFBO0FBRUQsMEJBQWlDLE9BQW9CO0lBQ25ELElBQUksV0FBVyxHQUFHLGNBQWMsQ0FBQztJQUNqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxFQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUNoQyxDQUFDO0FBQ0gsQ0FBQztBQUxlLHdCQUFnQixtQkFLL0IsQ0FBQTtBQUVELEVBQUU7QUFDRiw2QkFBNkI7QUFDN0IsdUZBQXVGO0FBQ3ZGLHVEQUF1RDtBQUN2RCxrREFBa0Q7QUFDbEQsZ0VBQWdFO0FBQ2hFLEVBQUU7QUFDRixzREFBc0Q7QUFDdEQsaUJBQWlCO0FBQ2pCLG9DQUFvQztBQUNwQyxXQUFXO0FBQ1gsUUFBUTtBQUNSLE1BQU07QUFDTixJQUFJIiwiZmlsZSI6InNoYXJlZC9oZWxwZXJzL3ZhbGlkYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIEN1c3RvbSB2YWxpZGF0b3JzIHRvIHVzZSBldmVyeXdoZXJlLlxuICovXG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFNJTkdMRSBGSUVMRCBWQUxJREFUT1JTXG5leHBvcnQgZnVuY3Rpb24gZW1haWxWYWxpZGF0b3IoY29udHJvbDogRm9ybUNvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gIHZhciBlbWFpbFJlZ2V4cCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xuICBpZiAoY29udHJvbC52YWx1ZSAmJiAhZW1haWxSZWdleHAudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgIHJldHVybiB7aW52YWxpZEVtYWlsOiB0cnVlfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzc3dvcmRWYWxpZGF0b3IoY29udHJvbDogRm9ybUNvbnRyb2wpOntba2V5OnN0cmluZ106YW55fXtcbiAgdmFyIHBhc3N3b3JkUmVnZXhwID0gL14oPz0uKj9bQS1aXSkoPz0uKj9bYS16XSkoPz0uKj9bMC05XSkoPz0uKj9bIz8hQCQlXiYqLV0pLns4LH0kL2k7XG4gIGlmIChjb250cm9sLnZhbHVlICYmICFwYXNzd29yZFJlZ2V4cC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgcmV0dXJuIHtpbnZhbGlkUGFzc3dvcmQ6IHRydWV9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwaG9uZVZhbGlkYXRvcihjb250cm9sOiBGb3JtQ29udHJvbCk6e1trZXk6c3RyaW5nXTphbnl9e1xuICB2YXIgcGhvbmVSZWdleHAgPSAvXlxcKz9bMC05LV0rKD86O1xcKz9bMC05LV0rKSokL2dtO1xuICBpZiAoY29udHJvbC52YWx1ZSAmJiAhcGhvbmVSZWdleHAudGVzdChjb250cm9sLnZhbHVlKSkge1xuICAgIHJldHVybiB7aW52YWxpZFBob25lOiB0cnVlfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5nbGlzaFZhbGlkYXRvcihjb250cm9sOiBGb3JtQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgdmFyIGVtYWlsUmVnZXhwID0gL15bQS1aYS16XSskL2k7XG4gIGlmIChjb250cm9sLnZhbHVlICYmICFlbWFpbFJlZ2V4cC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgcmV0dXJuIHtpbnZhbGlkRW5nbGlzaDogdHJ1ZX07XG4gIH1cbn1cblxuLy9cbi8vIC8vQ09OVFJPTCBHUk9VUCBWQUxJREFUT1JTXG4vLyBleHBvcnQgZnVuY3Rpb24gbWF0Y2hpbmdQYXNzd29yZHMocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpIHtcbi8vICAgcmV0dXJuIChncm91cDogQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbi8vICAgICBsZXQgcGFzc3dvcmQgPSBncm91cC5jb250cm9sc1twYXNzd29yZEtleV07XG4vLyAgICAgbGV0IGNvbmZpcm1QYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1QYXNzd29yZEtleV07XG4vL1xuLy8gICAgIGlmIChwYXNzd29yZC52YWx1ZSAhPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG4vLyAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICBtaXNtYXRjaGVkUGFzc3dvcmRzOiB0cnVlXG4vLyAgICAgICB9O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
