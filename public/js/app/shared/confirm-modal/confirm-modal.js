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
var ConfirmModal = (function () {
    function ConfirmModal() {
        this.id = 'myModal';
        this.title = '';
        this.data = '';
    }
    ConfirmModal.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmModal.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmModal.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmModal.prototype, "data", void 0);
    ConfirmModal = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'confirm-modal',
            templateUrl: 'confirm-modal.html',
            styleUrls: ['confirm-modal.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmModal);
    return ConfirmModal;
}());
exports.ConfirmModal = ConfirmModal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9jb25maXJtLW1vZGFsL2NvbmZpcm0tbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQVV2RDtJQWFJO1FBVkEsT0FBRSxHQUFXLFNBQVMsQ0FBQztRQUd2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLFNBQUksR0FBVyxFQUFFLENBQUM7SUFJSixDQUFDO0lBRWYsK0JBQVEsR0FBUjtJQUVBLENBQUM7SUFmRDtRQUFDLFlBQUssRUFBRTs7NENBQUE7SUFHUjtRQUFDLFlBQUssRUFBRTs7K0NBQUE7SUFHUjtRQUFDLFlBQUssRUFBRTs7OENBQUE7SUFoQlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FFbkMsQ0FBQzs7b0JBQUE7SUFvQkYsbUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLG9CQUFZLGVBa0J4QixDQUFBIiwiZmlsZSI6InNoYXJlZC9jb25maXJtLW1vZGFsL2NvbmZpcm0tbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdjb25maXJtLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbmZpcm0tbW9kYWwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2NvbmZpcm0tbW9kYWwuY3NzJ10sXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maXJtTW9kYWwgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICBpZDogc3RyaW5nID0gJ215TW9kYWwnO1xuXG4gICAgQElucHV0KClcbiAgICB0aXRsZTogc3RyaW5nID0gJyc7XG5cbiAgICBASW5wdXQoKVxuICAgIGRhdGE6IHN0cmluZyA9ICcnO1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
