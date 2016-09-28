"use strict";
var Storage = (function () {
    function Storage() {
    }
    Storage.prototype.getAuthToken = function () {
        return localStorage.getItem('token');
    };
    Storage.prototype.setAuthToken = function (token) {
        localStorage.setItem('token', token);
    };
    Storage.prototype.removeAuthToken = function () {
        // localStorage.removeItem('token');
        localStorage.clear();
    };
    Storage.prototype.setRoleToken = function (role) {
        localStorage.setItem('role', role);
    };
    Storage.prototype.setNameToken = function (name) {
        localStorage.setItem('name', name);
    };
    Storage.prototype.getRoleToken = function () {
        return localStorage.getItem('role');
    };
    Storage.prototype.getNameToken = function () {
        return localStorage.getItem('name');
    };
    Storage.prototype.getIdToken = function () {
        return localStorage.getItem('id');
    };
    return Storage;
}());
exports.storage = new Storage();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9oZWxwZXJzL3N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUFrQ0EsQ0FBQztJQWhDQyw4QkFBWSxHQUFaO1FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDhCQUFZLEdBQVosVUFBYSxLQUFTO1FBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpQ0FBZSxHQUFmO1FBQ0Usb0NBQW9DO1FBQ3BDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQVksR0FBWixVQUFhLElBQVE7UUFDbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDhCQUFZLEdBQVosVUFBYSxJQUFRO1FBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw4QkFBWSxHQUFaO1FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNEJBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtBQUVZLGVBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6InNoYXJlZC9oZWxwZXJzL3N0b3JhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTdG9yYWdlIHtcblxuICBnZXRBdXRoVG9rZW4oKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICB9XG5cbiAgc2V0QXV0aFRva2VuKHRva2VuOmFueSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgfVxuXG4gIHJlbW92ZUF1dGhUb2tlbigpIHtcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxuXG4gIHNldFJvbGVUb2tlbihyb2xlOmFueSl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvbGUnLCByb2xlKTtcbiAgfVxuXG4gIHNldE5hbWVUb2tlbihuYW1lOmFueSl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCBuYW1lKTtcbiAgfVxuXG4gIGdldFJvbGVUb2tlbigpe1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sZScpO1xuICB9XG5cbiAgZ2V0TmFtZVRva2VuKCl7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJyk7XG4gIH1cblxuICBnZXRJZFRva2VuKCl7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
