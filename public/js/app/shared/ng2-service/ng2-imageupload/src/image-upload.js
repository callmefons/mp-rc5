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
var utils_1 = require('./utils');
var ImageUpload = (function () {
    function ImageUpload(_elementref, _renderer) {
        this._elementref = _elementref;
        this._renderer = _renderer;
        this.imageSelected = new core_1.EventEmitter();
    }
    ImageUpload.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.listen(this._elementref.nativeElement, 'change', function (e) { return _this.readFiles(e); });
    };
    ImageUpload.prototype.readFiles = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            var result = {
                file: file,
                url: URL.createObjectURL(file)
            };
            this.fileToDataURL(file, result).then(function (r) { return _this.resize(r); }).then(function (r) { return _this.imageSelected.emit(r); });
        }
    };
    ImageUpload.prototype.resize = function (result) {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.resizeOptions) {
                utils_1.createImage(result.url, function (image) {
                    var dataUrl = utils_1.resizeImage(image, _this.resizeOptions);
                    result.resized = {
                        dataURL: dataUrl,
                        type: dataUrl.match(/:(.+\/.+;)/)[1]
                    };
                    resolve(result);
                });
            }
            else {
                resolve(result);
            }
        });
    };
    ImageUpload.prototype.fileToDataURL = function (file, result) {
        return new Promise(function (resolve) {
            var reader = new FileReader();
            reader.onload = function (e) {
                result.dataURL = reader.result;
                resolve(result);
            };
            reader.readAsDataURL(file);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImageUpload.prototype, "imageSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ImageUpload.prototype, "resizeOptions", void 0);
    ImageUpload = __decorate([
        core_1.Directive({
            selector: 'input[type=file][image-upload]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ImageUpload);
    return ImageUpload;
}());
exports.ImageUpload = ImageUpload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9uZzItc2VydmljZS9uZzItaW1hZ2V1cGxvYWQvc3JjL2ltYWdlLXVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1GLGVBQWUsQ0FBQyxDQUFBO0FBR25HLHNCQUF1QyxTQUFTLENBQUMsQ0FBQTtBQUtqRDtJQU1FLHFCQUFvQixXQUF1QixFQUFVLFNBQW1CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUo5RCxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBZSxDQUFDO0lBSzFELENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsVUFBQyxDQUFLLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVPLCtCQUFTLEdBQWpCLFVBQWtCLEtBQVM7UUFBM0IsaUJBUUM7UUFQQyxHQUFHLENBQUMsQ0FBYSxVQUFrQixFQUFsQixLQUFBLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFsQixjQUFrQixFQUFsQixJQUFrQixDQUFDO1lBQS9CLElBQUksSUFBSSxTQUFBO1lBQ1gsSUFBSSxNQUFNLEdBQWdCO2dCQUN4QixJQUFJLEVBQUUsSUFBSTtnQkFDVixHQUFHLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7YUFDL0IsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztTQUNsRztJQUNILENBQUM7SUFFTyw0QkFBTSxHQUFkLFVBQWUsTUFBbUI7UUFBbEMsaUJBZUM7UUFkQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixtQkFBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBQSxLQUFLO29CQUMzQixJQUFJLE9BQU8sR0FBRyxtQkFBVyxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JELE1BQU0sQ0FBQyxPQUFPLEdBQUc7d0JBQ2YsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckMsQ0FBQztvQkFDRixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sbUNBQWEsR0FBckIsVUFBc0IsSUFBVSxFQUFFLE1BQW1CO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUM5QixNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVMsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUEvQ0Q7UUFBQyxhQUFNLEVBQUU7O3NEQUFBO0lBRVQ7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBUFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdDQUFnQztTQUMzQyxDQUFDOzttQkFBQTtJQW1ERixrQkFBQztBQUFELENBbERBLEFBa0RDLElBQUE7QUFsRFksbUJBQVcsY0FrRHZCLENBQUEiLCJmaWxlIjoic2hhcmVkL25nMi1zZXJ2aWNlL25nMi1pbWFnZXVwbG9hZC9zcmMvaW1hZ2UtdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEltYWdlUmVzdWx0LCBSZXNpemVPcHRpb25zfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtjcmVhdGVJbWFnZSwgcmVzaXplSW1hZ2V9IGZyb20gJy4vdXRpbHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPWZpbGVdW2ltYWdlLXVwbG9hZF0nXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgaW1hZ2VTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VSZXN1bHQ+KCk7XG5cbiAgQElucHV0KCkgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50cmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLl9lbGVtZW50cmVmLm5hdGl2ZUVsZW1lbnQsICdjaGFuZ2UnLCAoZTphbnkpID0+IHRoaXMucmVhZEZpbGVzKGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZEZpbGVzKGV2ZW50OmFueSkge1xuICAgIGZvciAobGV0IGZpbGUgb2YgZXZlbnQudGFyZ2V0LmZpbGVzKSB7XG4gICAgICBsZXQgcmVzdWx0OiBJbWFnZVJlc3VsdCA9IHtcbiAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICB9O1xuICAgICAgdGhpcy5maWxlVG9EYXRhVVJMKGZpbGUsIHJlc3VsdCkudGhlbihyID0+IHRoaXMucmVzaXplKHIpKS50aGVuKHIgPT4gdGhpcy5pbWFnZVNlbGVjdGVkLmVtaXQocikpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplKHJlc3VsdDogSW1hZ2VSZXN1bHQpOiBQcm9taXNlPEltYWdlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodGhpcy5yZXNpemVPcHRpb25zKSB7XG4gICAgICAgIGNyZWF0ZUltYWdlKHJlc3VsdC51cmwsIGltYWdlID0+IHtcbiAgICAgICAgICBsZXQgZGF0YVVybCA9IHJlc2l6ZUltYWdlKGltYWdlLCB0aGlzLnJlc2l6ZU9wdGlvbnMpO1xuICAgICAgICAgIHJlc3VsdC5yZXNpemVkID0ge1xuICAgICAgICAgICAgZGF0YVVSTDogZGF0YVVybCxcbiAgICAgICAgICAgIHR5cGU6IGRhdGFVcmwubWF0Y2goLzooLitcXC8uKzspLylbMV1cbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbGVUb0RhdGFVUkwoZmlsZTogRmlsZSwgcmVzdWx0OiBJbWFnZVJlc3VsdCk6IFByb21pc2U8SW1hZ2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmVzdWx0LmRhdGFVUkwgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
