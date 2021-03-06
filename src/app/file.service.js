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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FileService = (function () {
    function FileService() {
    }
    FileService.prototype.getFiles = function () {
        // for now getting dummy files
        return [{ name: "LFM 12/15/2016 05:44:22 CST" },
            { name: "A2E AD 2013 Q4" },
            { name: "CPhA Dashboard 2017 10" },
            { name: "CPhA 780 Dashboard 2017 07" },
            { name: "Tony's Awesome Bonus Report" },
            { name: "Aetna Dashboard 2017 03" }];
    };
    FileService.prototype.uploadFiles = function (files) {
        // we will upload the files to server
    };
    return FileService;
}());
FileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map