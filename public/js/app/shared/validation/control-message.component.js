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
var forms_1 = require('@angular/forms');
var validation_service_1 = require("./validation.service");
var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched && this.control.dirty) {
                    return validation_service_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        core_1.Component({
            selector: 'control-messages',
            template: "<div *ngIf=\"errorMessage !== null\" style=\"margin-top: 5px; margin-bottom: -10px\">\n                <small style=\"color: #a94442\">{{errorMessage}} *</small>\n             </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());
exports.ControlMessagesComponent = ControlMessagesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92YWxpZGF0aW9uL2NvbnRyb2wtbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxzQkFBdUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUN4RCxtQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQVF2RDtJQUVJO0lBQWdCLENBQUM7SUFFakIsc0JBQUksa0RBQVk7YUFBaEI7WUFDSSxHQUFHLENBQUMsQ0FBQyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2pHLE1BQU0sQ0FBQyxzQ0FBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDdkcsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBWEQ7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBUFo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsd0xBRU07U0FDbkIsQ0FBQzs7Z0NBQUE7SUFjRiwrQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksZ0NBQXdCLDJCQWFwQyxDQUFBIiwiZmlsZSI6InNoYXJlZC92YWxpZGF0aW9uL2NvbnRyb2wtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4vdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29udHJvbC1tZXNzYWdlcycsXG4gICAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA1cHg7IG1hcmdpbi1ib3R0b206IC0xMHB4XCI+XG4gICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPVwiY29sb3I6ICNhOTQ0NDJcIj57e2Vycm9yTWVzc2FnZX19ICo8L3NtYWxsPlxuICAgICAgICAgICAgIDwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xNZXNzYWdlc0NvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldCBlcnJvck1lc3NhZ2UoKSB7XG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB0aGlzLmNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIHRoaXMuY29udHJvbC50b3VjaGVkICYmIHRoaXMuY29udHJvbC5kaXJ0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0aW9uU2VydmljZS5nZXRWYWxpZGF0b3JFcnJvck1lc3NhZ2UocHJvcGVydHlOYW1lLCB0aGlzLmNvbnRyb2wuZXJyb3JzW3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
