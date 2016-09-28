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
var Search = (function () {
    function Search() {
    }
    Search.prototype.transform = function (data, key, term) {
        if (term === void 0) { term = ""; }
        if (!data)
            return null;
        return data.filter(function (item) {
            return item[key].toLowerCase().includes(term.toLowerCase());
        });
    };
    Search = __decorate([
        core_1.Pipe({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], Search);
    return Search;
}());
exports.Search = Search;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9zZWFyY2hhY2NvdXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBSW5DO0lBQUE7SUFPQSxDQUFDO0lBTkMsMEJBQVMsR0FBVCxVQUFVLElBQVEsRUFBRSxHQUFPLEVBQUUsSUFBUztRQUFULG9CQUFTLEdBQVQsU0FBUztRQUNwQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFRO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQVRIO1FBQUMsV0FBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDOztjQUFBO0lBUUYsYUFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksY0FBTSxTQU9sQixDQUFBIiwiZmlsZSI6InNoYXJlZC9waXBlcy9zZWFyY2hhY2NvdXQucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AUGlwZSh7XG4gIG5hbWU6ICdzZWFyY2gnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaHtcbiAgdHJhbnNmb3JtKGRhdGE6YW55LCBrZXk6YW55LCB0ZXJtID0gXCJcIil7XG4gICAgaWYoIWRhdGEpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigoaXRlbTphbnkpID0+IHtcbiAgICAgIHJldHVybiBpdGVtW2tleV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
