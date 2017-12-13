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
var FolderService = (function () {
    function FolderService() {
        this.folders = [];
    }
    FolderService.prototype.getFolders = function () {
        // dummy folders
        this.folders = [{
                id: "1",
                label: "PeopleSafe Log/Activity Reports"
            }, {
                id: "2",
                label: "Aetna"
            },
            {
                id: "3",
                label: "Network Help Desk Dashboards"
            },
            {
                id: "4",
                label: "CMS Medicore D Dashboard"
            }
        ];
        return this.folders;
    };
    FolderService.prototype.addFileInFolder = function (folderId, file) {
        // add file inside the folder
        var folder = this.folders.find(function (t) { return t.id == folderId; });
        if (folder) {
            if (!folder.files)
                folder.files = [];
            folder.files.push(file);
        }
    };
    FolderService.prototype.getClientReports = function () {
        // need to call api here
        return [
            { label: "Call Stat Reports", id: "1" },
            { label: "PeopleSafe Log/Activity Reports", id: "2" },
            { label: "Aetna", id: "3" },
            {
                label: "Network Help Desk Dashboards",
                id: "4",
                files: [
                    { name: "Arcadian Health Plan_Inbound Log Activities - Top 5 - LFM" },
                    { name: "Arcadian Health Plan_Inbound Log Activities - Top 5 - LFM" },
                    { name: "Arcadian Health Plan_Inbound Log Activities - Top 5 - LFM" },
                    { name: "Arcadian Health Plan_Inbound Log Activities - Top 5 - LFM" }
                ]
            },
        ];
    };
    return FolderService;
}());
FolderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FolderService);
exports.FolderService = FolderService;
//# sourceMappingURL=folder.service.js.map