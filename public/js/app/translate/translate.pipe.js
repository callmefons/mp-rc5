// app/translate/translate.pipe.ts
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
var TranslatePipe = (function () {
    function TranslatePipe(_translate) {
        this._translate = _translate;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this._translate.instant(value);
    };
    TranslatePipe = __decorate([
        core_1.Pipe({
            name: 'translate',
            pure: false // impure pipe, update value when we change language
        }), 
        __metadata('design:paramtypes', [translate_service_1.TranslateService])
    ], TranslatePipe);
    return TranslatePipe;
}());
exports.TranslatePipe = TranslatePipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zbGF0ZS90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7Ozs7Ozs7Ozs7O0FBRWxDLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUNwRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQU1yRDtJQUVJLHVCQUFvQixVQUE0QjtRQUE1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFJLENBQUM7SUFFckQsaUNBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxJQUFXO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBYkw7UUFBQyxXQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsS0FBSyxDQUFDLG9EQUFvRDtTQUNuRSxDQUFDOztxQkFBQTtJQVdGLG9CQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxxQkFBYSxnQkFTekIsQ0FBQSIsImZpbGUiOiJ0cmFuc2xhdGUvdHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlLnRzXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIi4vdHJhbnNsYXRlLnNlcnZpY2VcIjtcbkBQaXBlKHtcbiAgICBuYW1lOiAndHJhbnNsYXRlJyxcbiAgICBwdXJlOiBmYWxzZSAvLyBpbXB1cmUgcGlwZSwgdXBkYXRlIHZhbHVlIHdoZW4gd2UgY2hhbmdlIGxhbmd1YWdlXG59KVxuXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7IH1cblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRlLmluc3RhbnQodmFsdWUpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
