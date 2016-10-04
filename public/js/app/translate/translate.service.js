"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var translations_1 = require('./translations'); // import our opaque token
var TranslateService = (function () {
    // inject our translations
    function TranslateService(_translations) {
        this._translations = _translations;
        if (localStorage.getItem('lang') === null) {
            this.use('en');
        }
        else {
            this.use(localStorage.getItem('lang'));
        }
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            this._currentLang = localStorage.getItem('lang');
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.use = function (lang) {
        // set current language
        localStorage.setItem('lang', lang);
        this._currentLang = lang;
    };
    TranslateService.prototype.translate = function (key) {
        // private perform translation
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslateService.prototype.instant = function (key) {
        // public perform translation
        return this.translate(key);
    };
    TranslateService = __decorate([
        // import our opaque token
        core_1.Injectable(),
        __param(0, core_1.Inject(translations_1.TRANSLATIONS)), 
        __metadata('design:paramtypes', [Object])
    ], TranslateService);
    return TranslateService;
}());
exports.TranslateService = TranslateService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELDZCQUE2QixnQkFBZ0IsQ0FBQyxDQUFBLENBQUMsMEJBQTBCO0FBR3pFO0lBUUksMEJBQTBCO0lBQzFCLDBCQUEwQyxhQUFrQjtRQUFsQixrQkFBYSxHQUFiLGFBQWEsQ0FBSztRQUV4RCxFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQUEsSUFBSSxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0wsQ0FBQztJQWJELHNCQUFXLHlDQUFXO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBWU0sOEJBQUcsR0FBVixVQUFXLElBQVk7UUFDbkIsdUJBQXVCO1FBQ3ZCLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFTyxvQ0FBUyxHQUFqQixVQUFrQixHQUFXO1FBQ3pCLDhCQUE4QjtRQUM5QixJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFFdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLEdBQVc7UUFDdEIsNkJBQTZCO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUF2Q0w7UUFGK0MsMEJBQTBCO1FBRXhFLGlCQUFVLEVBQUU7bUJBVUksYUFBTSxDQUFDLDJCQUFZLENBQUM7O3dCQVZ4QjtJQXdDYix1QkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1ksd0JBQWdCLG1CQXVDNUIsQ0FBQSIsImZpbGUiOiJ0cmFuc2xhdGUvdHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUUkFOU0xBVElPTlMgfSBmcm9tICcuL3RyYW5zbGF0aW9ucyc7IC8vIGltcG9ydCBvdXIgb3BhcXVlIHRva2VuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9jdXJyZW50TGFuZzogc3RyaW5nO1xuXG4gICAgcHVibGljIGdldCBjdXJyZW50TGFuZygpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudExhbmc7XG4gICAgfVxuXG4gICAgLy8gaW5qZWN0IG91ciB0cmFuc2xhdGlvbnNcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KFRSQU5TTEFUSU9OUykgcHJpdmF0ZSBfdHJhbnNsYXRpb25zOiBhbnkpIHtcblxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpID09PSBudWxsKXtcbiAgICAgICAgICAgdGhpcy51c2UoJ2VuJyk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy8gc2V0IGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmcnLCBsYW5nKTtcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmcgPSBsYW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNsYXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgLy8gcHJpdmF0ZSBwZXJmb3JtIHRyYW5zbGF0aW9uXG4gICAgICAgIGxldCB0cmFuc2xhdGlvbiA9IGtleTtcblxuICAgICAgICBpZiAodGhpcy5fdHJhbnNsYXRpb25zW3RoaXMuY3VycmVudExhbmddICYmIHRoaXMuX3RyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXVtrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRpb25zW3RoaXMuY3VycmVudExhbmddW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGluc3RhbnQoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgLy8gcHVibGljIHBlcmZvcm0gdHJhbnNsYXRpb25cbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGtleSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
