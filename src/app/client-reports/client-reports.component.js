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
var folder_service_1 = require("./../folder.service");
var core_1 = require("@angular/core");
var ClientReportsComponent = (function () {
    function ClientReportsComponent(_folderService) {
        this._folderService = _folderService;
    }
    ClientReportsComponent.prototype.ngOnInit = function () {
        this.folders = this._folderService.getClientReports();
        this.nodes = this.folders.map(function (folder) { return ({
            label: folder.label,
            children: (folder.files || []).map(function (file) { return ({ label: file.name }); })
        }); });
    };
    return ClientReportsComponent;
}());
ClientReportsComponent = __decorate([
    core_1.Component({
        selector: 'app-client-reports',
        templateUrl: './client-reports.component.html',
        styleUrls: ['./client-reports.component.css'],
        providers: [folder_service_1.FolderService]
    }),
    __metadata("design:paramtypes", [folder_service_1.FolderService])
], ClientReportsComponent);
exports.ClientReportsComponent = ClientReportsComponent;
//# sourceMappingURL=client-reports.component.js.map