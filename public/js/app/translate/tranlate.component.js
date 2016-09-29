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
var core_1 = require('@angular/core');
var translate_service_1 = require("./translate.service");
var TranslateComponent = (function () {
    function TranslateComponent(_translate) {
        this._translate = _translate;
    }
    TranslateComponent.prototype.ngOnInit = function () {
        // standing data
        this.supportedLanguages = [
            { display: 'EN', value: 'en' },
            { display: 'TH', value: 'th' }
        ];
    };
    TranslateComponent.prototype.isCurrentLang = function (lang) {
        return lang === this._translate.currentLang;
    };
    TranslateComponent.prototype.selectLang = function (lang) {
        // set default;
        this._translate.use(lang);
    };
    TranslateComponent = __decorate([
        core_1.Component({
            selector: 'my-translate',
            template: "\n         <button style=\"margin-top: 8px;\"\n                *ngFor=\"let lang of supportedLanguages\"\n                (click)=\"selectLang(lang.value)\"\n                class=\"btn btn-default btn-sm\" [class.btn-primary]=\"isCurrentLang(lang.value)\">\n                {{ lang.display }}\n            </button>\n    "
        }), 
        __metadata('design:paramtypes', [translate_service_1.TranslateService])
    ], TranslateComponent);
    return TranslateComponent;
}());
exports.TranslateComponent = TranslateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zbGF0ZS90cmFubGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQWFyRDtJQUlJLDRCQUFvQixVQUE0QjtRQUE1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFFLENBQUM7SUFFbkQscUNBQVEsR0FBUjtRQUNJLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsa0JBQWtCLEdBQUc7WUFDdEIsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDOUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7U0FDakMsQ0FBQztJQUNOLENBQUM7SUFHRCwwQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBRWhELENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNuQixlQUFlO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWxDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsb1VBT1Q7U0FDSixDQUFDOzswQkFBQTtJQTBCRix5QkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6QlksMEJBQWtCLHFCQXlCOUIsQ0FBQSIsImZpbGUiOiJ0cmFuc2xhdGUvdHJhbmxhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gXCIuL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktdHJhbnNsYXRlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1hcmdpbi10b3A6IDhweDtcIlxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBsYW5nIG9mIHN1cHBvcnRlZExhbmd1YWdlc1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdExhbmcobGFuZy52YWx1ZSlcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIFtjbGFzcy5idG4tcHJpbWFyeV09XCJpc0N1cnJlbnRMYW5nKGxhbmcudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAge3sgbGFuZy5kaXNwbGF5IH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZUNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSl7fVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgLy8gc3RhbmRpbmcgZGF0YVxuICAgICAgICB0aGlzLnN1cHBvcnRlZExhbmd1YWdlcyA9IFtcbiAgICAgICAgICAgIHsgZGlzcGxheTogJ0VOJywgdmFsdWU6ICdlbicgfSxcbiAgICAgICAgICAgIHsgZGlzcGxheTogJ1RIJywgdmFsdWU6ICd0aCcgfVxuICAgICAgICBdO1xuICAgIH1cblxuXG4gICAgaXNDdXJyZW50TGFuZyhsYW5nOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGxhbmcgPT09IHRoaXMuX3RyYW5zbGF0ZS5jdXJyZW50TGFuZztcblxuICAgIH1cblxuICAgIHNlbGVjdExhbmcobGFuZzogc3RyaW5nKSB7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0O1xuICAgICAgICB0aGlzLl90cmFuc2xhdGUudXNlKGxhbmcpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
