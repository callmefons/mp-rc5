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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9oZWxwZXJzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLDBCQUEwQjtBQUMxQix3QkFBK0IsT0FBb0I7SUFDakQsSUFBSSxXQUFXLEdBQUcsbUdBQW1HLENBQUM7SUFDdEgsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUM7QUFMZSxzQkFBYyxpQkFLN0IsQ0FBQTtBQUVELDJCQUFrQyxPQUFvQjtJQUNwRCxJQUFJLGNBQWMsR0FBRyxpRUFBaUUsQ0FBQztJQUN2RixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxFQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUNqQyxDQUFDO0FBQ0gsQ0FBQztBQUxlLHlCQUFpQixvQkFLaEMsQ0FBQTtBQUVELHdCQUErQixPQUFvQjtJQUNqRCxJQUFJLFdBQVcsR0FBRyxnQ0FBZ0MsQ0FBQztJQUNuRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUM5QixDQUFDO0FBQ0gsQ0FBQztBQUxlLHNCQUFjLGlCQUs3QixDQUFBO0FBQ0QsRUFBRTtBQUNGLDZCQUE2QjtBQUM3Qix1RkFBdUY7QUFDdkYsdURBQXVEO0FBQ3ZELGtEQUFrRDtBQUNsRCxnRUFBZ0U7QUFDaEUsRUFBRTtBQUNGLHNEQUFzRDtBQUN0RCxpQkFBaUI7QUFDakIsb0NBQW9DO0FBQ3BDLFdBQVc7QUFDWCxRQUFRO0FBQ1IsTUFBTTtBQUNOLElBQUkiLCJmaWxlIjoic2hhcmVkL2hlbHBlcnMvdmFsaWRhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gQ3VzdG9tIHZhbGlkYXRvcnMgdG8gdXNlIGV2ZXJ5d2hlcmUuXG4gKi9cbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gU0lOR0xFIEZJRUxEIFZBTElEQVRPUlNcbmV4cG9ydCBmdW5jdGlvbiBlbWFpbFZhbGlkYXRvcihjb250cm9sOiBGb3JtQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgdmFyIGVtYWlsUmVnZXhwID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XG4gIGlmIChjb250cm9sLnZhbHVlICYmICFlbWFpbFJlZ2V4cC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgcmV0dXJuIHtpbnZhbGlkRW1haWw6IHRydWV9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXNzd29yZFZhbGlkYXRvcihjb250cm9sOiBGb3JtQ29udHJvbCk6e1trZXk6c3RyaW5nXTphbnl9e1xuICB2YXIgcGFzc3dvcmRSZWdleHAgPSAvXig/PS4qP1tBLVpdKSg/PS4qP1thLXpdKSg/PS4qP1swLTldKSg/PS4qP1sjPyFAJCVeJiotXSkuezgsfSQvaTtcbiAgaWYgKGNvbnRyb2wudmFsdWUgJiYgIXBhc3N3b3JkUmVnZXhwLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICByZXR1cm4ge2ludmFsaWRQYXNzd29yZDogdHJ1ZX07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBob25lVmFsaWRhdG9yKGNvbnRyb2w6IEZvcm1Db250cm9sKTp7W2tleTpzdHJpbmddOmFueX17XG4gIHZhciBwaG9uZVJlZ2V4cCA9IC9eXFwrP1swLTktXSsoPzo7XFwrP1swLTktXSspKiQvZ207XG4gIGlmIChjb250cm9sLnZhbHVlICYmICFwaG9uZVJlZ2V4cC50ZXN0KGNvbnRyb2wudmFsdWUpKSB7XG4gICAgcmV0dXJuIHtpbnZhbGlkUGhvbmU6IHRydWV9O1xuICB9XG59XG4vL1xuLy8gLy9DT05UUk9MIEdST1VQIFZBTElEQVRPUlNcbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXRjaGluZ1Bhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xuLy8gICByZXR1cm4gKGdyb3VwOiBDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuLy8gICAgIGxldCBwYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3JkS2V5XTtcbi8vICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcbi8vXG4vLyAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbi8vICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgIG1pc21hdGNoZWRQYXNzd29yZHM6IHRydWVcbi8vICAgICAgIH07XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
