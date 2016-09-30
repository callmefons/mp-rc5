"use strict";
var http_1 = require('@angular/http');
var Request = (function () {
    function Request() {
    }
    Request.prototype.getJsonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    Request.prototype.getxhrHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With');
        headers.append('Access-Control-Allow-Credentials', 'true');
        return { headers: headers };
    };
    return Request;
}());
exports.request = new Request();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9oZWxwZXJzL3JlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUV4RDtJQUFBO0lBb0JBLENBQUM7SUFsQkMsZ0NBQWMsR0FBZDtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCwrQkFBYSxHQUFiO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUcseUJBQXlCLENBQUMsQ0FBQztRQUMzRSxPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLDZEQUE2RCxDQUFDLENBQUM7UUFDOUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsRUFBQyxTQUFBLE9BQU8sRUFBQyxDQUFDO0lBQ25CLENBQUM7SUFHSCxjQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQUVZLGVBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6InNoYXJlZC9oZWxwZXJzL3JlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmNsYXNzIFJlcXVlc3Qge1xuXG4gIGdldEpzb25IZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGdldHhockhlYWRlcnMoKXtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ1gtUmVxdWVzdGVkLVdpdGgnLCdYTUxIdHRwUmVxdWVzdCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nICwgJyonKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycgLCAnUE9TVCwgR0VULCBPUFRJT05TLCBQVVQnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdPcmlnaW4sIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBdXRob3JpemF0aW9uLCBYLVJlcXVlc3QtV2l0aCcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJyk7XG4gICAgcmV0dXJuIHtoZWFkZXJzfTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
