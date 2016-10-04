"use strict";
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Invalid credit card number',
            'invalidEmailAddress': 'Invalid Email Address',
            'invalidPassword': 'Invalid Password',
            'invalidNumber': 'Invalid Number',
            'minlength': "Minimum " + validatorValue.requiredLength + " length",
            'maxlength': "Maximum " + validatorValue.requiredLength + " length",
            'equalTo': "Not equal to"
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.isNumber = function (control) {
        if (control.value != '' && !isNaN(control.value)) {
            return null;
        }
        return { 'invalidNumber': true };
    };
    ValidationService.youtubeParser = function (url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92YWxpZGF0aW9uL3ZhbGlkYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtJQThEQSxDQUFDO0lBN0RVLDBDQUF3QixHQUEvQixVQUFnQyxhQUFxQixFQUFFLGNBQW9CO1FBQ3ZFLElBQUksTUFBTSxHQUFHO1lBQ1QsVUFBVSxFQUFFLFVBQVU7WUFDdEIsbUJBQW1CLEVBQUUsNEJBQTRCO1lBQ2pELHFCQUFxQixFQUFFLHVCQUF1QjtZQUM5QyxpQkFBaUIsRUFBRSxrQkFBa0I7WUFDckMsZUFBZSxFQUFFLGdCQUFnQjtZQUNqQyxXQUFXLEVBQUUsYUFBVyxjQUFjLENBQUMsY0FBYyxZQUFTO1lBQzlELFdBQVcsRUFBRSxhQUFXLGNBQWMsQ0FBQyxjQUFjLFlBQVM7WUFDOUQsU0FBUyxFQUFFLGNBQWM7U0FDNUIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLHFDQUFtQixHQUExQixVQUEyQixPQUFZO1FBQ25DLGlFQUFpRTtRQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1SkFBdUosQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvSyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRU0sZ0NBQWMsR0FBckIsVUFBc0IsT0FBWTtRQUM5QiwyQkFBMkI7UUFDM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsdUlBQXVJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0osTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1DQUFpQixHQUF4QixVQUF5QixPQUFZO1FBQ2pDLHNFQUFzRTtRQUN0RSw4REFBOEQ7UUFDOUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0lBR0wsQ0FBQztJQUVNLDBCQUFRLEdBQWYsVUFBZ0IsT0FBWTtRQUV4QixFQUFFLENBQUMsQ0FBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDZixDQUFDO1FBQ0QsTUFBTSxDQUFDLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFFTSwrQkFBYSxHQUFwQixVQUFxQixHQUFPO1FBQ3hCLElBQUksTUFBTSxHQUFHLDZFQUE2RSxDQUFDO1FBQzNGLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMvRCxDQUFDO0lBR0wsd0JBQUM7QUFBRCxDQTlEQSxBQThEQyxJQUFBO0FBOURZLHlCQUFpQixvQkE4RDdCLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xuICAgIHN0YXRpYyBnZXRWYWxpZGF0b3JFcnJvck1lc3NhZ2UodmFsaWRhdG9yTmFtZTogc3RyaW5nLCB2YWxpZGF0b3JWYWx1ZT86IGFueSkge1xuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ1JlcXVpcmVkJyxcbiAgICAgICAgICAgICdpbnZhbGlkQ3JlZGl0Q2FyZCc6ICdJbnZhbGlkIGNyZWRpdCBjYXJkIG51bWJlcicsXG4gICAgICAgICAgICAnaW52YWxpZEVtYWlsQWRkcmVzcyc6ICdJbnZhbGlkIEVtYWlsIEFkZHJlc3MnLFxuICAgICAgICAgICAgJ2ludmFsaWRQYXNzd29yZCc6ICdJbnZhbGlkIFBhc3N3b3JkJyxcbiAgICAgICAgICAgICdpbnZhbGlkTnVtYmVyJzogJ0ludmFsaWQgTnVtYmVyJyxcbiAgICAgICAgICAgICdtaW5sZW5ndGgnOiBgTWluaW11bSAke3ZhbGlkYXRvclZhbHVlLnJlcXVpcmVkTGVuZ3RofSBsZW5ndGhgLFxuICAgICAgICAgICAgJ21heGxlbmd0aCc6IGBNYXhpbXVtICR7dmFsaWRhdG9yVmFsdWUucmVxdWlyZWRMZW5ndGh9IGxlbmd0aGAsXG4gICAgICAgICAgICAnZXF1YWxUbyc6IGBOb3QgZXF1YWwgdG9gXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1t2YWxpZGF0b3JOYW1lXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlZGl0Q2FyZFZhbGlkYXRvcihjb250cm9sOiBhbnkpIHtcbiAgICAgICAgLy8gVmlzYSwgTWFzdGVyQ2FyZCwgQW1lcmljYW4gRXhwcmVzcywgRGluZXJzIENsdWIsIERpc2NvdmVyLCBKQ0JcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9KSQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyAnaW52YWxpZENyZWRpdENhcmQnOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZW1haWxWYWxpZGF0b3IoY29udHJvbDogYW55KSB7XG4gICAgICAgIC8vIFJGQyAyODIyIGNvbXBsaWFudCByZWdleFxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZS5tYXRjaCgvW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/LykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcGFzc3dvcmRWYWxpZGF0b3IoY29udHJvbDogYW55KSB7XG4gICAgICAgIC8vIHs2LDEwMH0gICAgICAgICAgIC0gQXNzZXJ0IHBhc3N3b3JkIGlzIGJldHdlZW4gNiBhbmQgMTAwIGNoYXJhY3RlcnNcbiAgICAgICAgLy8gKD89LipbMC05XSkgICAgICAgLSBBc3NlcnQgYSBzdHJpbmcgaGFzIGF0IGxlYXN0IG9uZSBudW1iZXJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL14oPz0uKltBLVphLXpdKSg/PS4qXFxkKVtBLVphLXpcXGRdezgsfSQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyAnaW52YWxpZFBhc3N3b3JkJzogdHJ1ZSB9O1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHN0YXRpYyBpc051bWJlcihjb250cm9sOiBhbnkpe1xuXG4gICAgICAgIGlmICggY29udHJvbC52YWx1ZSAhPSAnJyAmJiAhaXNOYU4oY29udHJvbC52YWx1ZSkgKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsnaW52YWxpZE51bWJlcic6IHRydWUgfTtcblxuICAgIH1cblxuICAgIHN0YXRpYyB5b3V0dWJlUGFyc2VyKHVybDphbnkpIHtcbiAgICAgICAgdmFyIHJlZ0V4cCA9IC9eLiooKHlvdXR1LmJlXFwvKXwodlxcLyl8KFxcL3VcXC9cXHdcXC8pfChlbWJlZFxcLyl8KHdhdGNoXFw/KSlcXD8/dj89PyhbXiNcXCZcXD9dKikuKi87XG4gICAgICAgIHZhciBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xuICAgICAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoWzddLmxlbmd0aCA9PSAxMSkgPyBtYXRjaFs3XSA6IGZhbHNlO1xuICAgIH1cblxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
