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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92YWxpZGF0aW9uL3ZhbGlkYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtJQTZEQSxDQUFDO0lBNURVLDBDQUF3QixHQUEvQixVQUFnQyxhQUFxQixFQUFFLGNBQW9CO1FBQ3ZFLElBQUksTUFBTSxHQUFHO1lBQ1QsVUFBVSxFQUFFLFVBQVU7WUFDdEIsbUJBQW1CLEVBQUUsNEJBQTRCO1lBQ2pELHFCQUFxQixFQUFFLHVCQUF1QjtZQUM5QyxpQkFBaUIsRUFBRSxrQkFBa0I7WUFDckMsZUFBZSxFQUFFLGdCQUFnQjtZQUNqQyxXQUFXLEVBQUUsYUFBVyxjQUFjLENBQUMsY0FBYyxZQUFTO1lBQzlELFdBQVcsRUFBRSxhQUFXLGNBQWMsQ0FBQyxjQUFjLFlBQVM7WUFDOUQsU0FBUyxFQUFFLGNBQWM7U0FDNUIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLHFDQUFtQixHQUExQixVQUEyQixPQUFZO1FBQ25DLGlFQUFpRTtRQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1SkFBdUosQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvSyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRU0sZ0NBQWMsR0FBckIsVUFBc0IsT0FBWTtRQUM5QiwyQkFBMkI7UUFDM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsdUlBQXVJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0osTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1DQUFpQixHQUF4QixVQUF5QixPQUFZO1FBQ2pDLHNFQUFzRTtRQUN0RSw4REFBOEQ7UUFDOUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0lBR0wsQ0FBQztJQUVNLDBCQUFRLEdBQWYsVUFBZ0IsT0FBWTtRQUV4QixFQUFFLENBQUMsQ0FBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDZixDQUFDO1FBQ0QsTUFBTSxDQUFDLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFFTSwrQkFBYSxHQUFwQixVQUFxQixHQUFPO1FBQ3hCLElBQUksTUFBTSxHQUFHLDZFQUE2RSxDQUFDO1FBQzNGLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMvRCxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQTdEQSxBQTZEQyxJQUFBO0FBN0RZLHlCQUFpQixvQkE2RDdCLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcbiAgICBzdGF0aWMgZ2V0VmFsaWRhdG9yRXJyb3JNZXNzYWdlKHZhbGlkYXRvck5hbWU6IHN0cmluZywgdmFsaWRhdG9yVmFsdWU/OiBhbnkpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCcsXG4gICAgICAgICAgICAnaW52YWxpZENyZWRpdENhcmQnOiAnSW52YWxpZCBjcmVkaXQgY2FyZCBudW1iZXInLFxuICAgICAgICAgICAgJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiAnSW52YWxpZCBFbWFpbCBBZGRyZXNzJyxcbiAgICAgICAgICAgICdpbnZhbGlkUGFzc3dvcmQnOiAnSW52YWxpZCBQYXNzd29yZCcsXG4gICAgICAgICAgICAnaW52YWxpZE51bWJlcic6ICdJbnZhbGlkIE51bWJlcicsXG4gICAgICAgICAgICAnbWlubGVuZ3RoJzogYE1pbmltdW0gJHt2YWxpZGF0b3JWYWx1ZS5yZXF1aXJlZExlbmd0aH0gbGVuZ3RoYCxcbiAgICAgICAgICAgICdtYXhsZW5ndGgnOiBgTWF4aW11bSAke3ZhbGlkYXRvclZhbHVlLnJlcXVpcmVkTGVuZ3RofSBsZW5ndGhgLFxuICAgICAgICAgICAgJ2VxdWFsVG8nOiBgTm90IGVxdWFsIHRvYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBjb25maWdbdmFsaWRhdG9yTmFtZV07XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWRpdENhcmRWYWxpZGF0b3IoY29udHJvbDogYW55KSB7XG4gICAgICAgIC8vIFZpc2EsIE1hc3RlckNhcmQsIEFtZXJpY2FuIEV4cHJlc3MsIERpbmVycyBDbHViLCBEaXNjb3ZlciwgSkNCXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlLm1hdGNoKC9eKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fDYoPzowMTF8NVswLTldWzAtOV0pWzAtOV17MTJ9fDNbNDddWzAtOV17MTN9fDMoPzowWzAtNV18WzY4XVswLTldKVswLTldezExfXwoPzoyMTMxfDE4MDB8MzVcXGR7M30pXFxkezExfSkkLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgJ2ludmFsaWRDcmVkaXRDYXJkJzogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGVtYWlsVmFsaWRhdG9yKGNvbnRyb2w6IGFueSkge1xuICAgICAgICAvLyBSRkMgMjgyMiBjb21wbGlhbnQgcmVnZXhcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL1thLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7ICdpbnZhbGlkRW1haWxBZGRyZXNzJzogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2w6IGFueSkge1xuICAgICAgICAvLyB7NiwxMDB9ICAgICAgICAgICAtIEFzc2VydCBwYXNzd29yZCBpcyBiZXR3ZWVuIDYgYW5kIDEwMCBjaGFyYWN0ZXJzXG4gICAgICAgIC8vICg/PS4qWzAtOV0pICAgICAgIC0gQXNzZXJ0IGEgc3RyaW5nIGhhcyBhdCBsZWFzdCBvbmUgbnVtYmVyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlLm1hdGNoKC9eKD89LipbQS1aYS16XSkoPz0uKlxcZClbQS1aYS16XFxkXXs4LH0kLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgJ2ludmFsaWRQYXNzd29yZCc6IHRydWUgfTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNOdW1iZXIoY29udHJvbDogYW55KXtcblxuICAgICAgICBpZiAoIGNvbnRyb2wudmFsdWUgIT0gJycgJiYgIWlzTmFOKGNvbnRyb2wudmFsdWUpICl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7J2ludmFsaWROdW1iZXInOiB0cnVlIH07XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgeW91dHViZVBhcnNlcih1cmw6YW55KSB7XG4gICAgICAgIHZhciByZWdFeHAgPSAvXi4qKCh5b3V0dS5iZVxcLyl8KHZcXC8pfChcXC91XFwvXFx3XFwvKXwoZW1iZWRcXC8pfCh3YXRjaFxcPykpXFw/P3Y/PT8oW14jXFwmXFw/XSopLiovO1xuICAgICAgICB2YXIgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaFs3XS5sZW5ndGggPT0gMTEpID8gbWF0Y2hbN10gOiBmYWxzZTtcbiAgICB9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
