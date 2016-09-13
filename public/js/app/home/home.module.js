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
var home_component_1 = require('./home.component');
var home_routing_1 = require('./home.routing');
var home_list_component_1 = require("./home-list.component");
var shared_module_1 = require("../shared/shared.module");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                home_routing_1.routing],
            declarations: [home_component_1.HomeComponent,
                home_list_component_1.HomeListComponent],
            exports: [
                home_component_1.HomeComponent,
                home_list_component_1.HomeListComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4QywrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUUvQyw2QkFBc0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUN2QyxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQUN4RCw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQWFyRDtJQUFBO0lBRUEsQ0FBQztJQWJEO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDRCQUFZO2dCQUNaLHNCQUFPLENBQUM7WUFDWixZQUFZLEVBQUUsQ0FBQyw4QkFBYTtnQkFDeEIsdUNBQWlCLENBQUM7WUFDdEIsT0FBTyxFQUFFO2dCQUNMLDhCQUFhO2dCQUNiLHVDQUFpQixDQUFDO1lBQ3RCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7O2tCQUFBO0lBR0YsaUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGtCQUFVLGFBRXRCLENBQUEiLCJmaWxlIjoiaG9tZS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7UHJvZHVjdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvYXBpLXNlcnZpY2UvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7cm91dGluZ30gZnJvbSAnLi9ob21lLnJvdXRpbmcnO1xuaW1wb3J0IHtIb21lTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICByb3V0aW5nXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50LFxuICAgICAgICBIb21lTGlzdENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBIb21lTGlzdENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
