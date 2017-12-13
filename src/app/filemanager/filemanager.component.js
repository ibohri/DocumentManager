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
var file_service_1 = require("./../file.service");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var folder_service_1 = require("../folder.service");
var FilemanagerComponent = (function () {
    function FilemanagerComponent(folderService, fileService) {
        this.folderService = folderService;
        this.fileService = fileService;
        this.files = [];
        this.showSettings = false;
        this.propertiesSaved = false;
        // dummy nodes
        this.treeNodes = [{
                label: "Health Plan Market",
                children: [{ label: "Blue Cross Blue Sheild" }, { label: "Commercial" }, { label: "Managed Medicaid" }],
            }];
        this.files = this.fileService.getFiles();
    }
    FilemanagerComponent.prototype.ngOnInit = function () {
        this.folders = this.folderService.getFolders();
    };
    FilemanagerComponent.prototype.uploadFile = function (files) {
        // upload the files
        this.fileService.uploadFiles(files);
        // add in files variables to update it on UI
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            this.files.push(file);
        }
    };
    FilemanagerComponent.prototype.dragStart = function (event, file) {
        // on drag start set the dragged file
        this.draggedFile = file;
    };
    FilemanagerComponent.prototype.drop = function (event, folder) {
        var _this = this;
        // add the dragged file inside folder
        if (this.draggedFile) {
            this.files = this.files.filter(function (t) { return t.name != _this.draggedFile.name; });
            folder.isExpanded = true;
            this.folderService.addFileInFolder(folder.id, this.draggedFile);
        }
    };
    FilemanagerComponent.prototype.dragEnd = function () {
        this.draggedFile = null;
    };
    FilemanagerComponent.prototype.onSave = function () {
        this.showSettings = false;
        this.propertiesSaved = true;
    };
    return FilemanagerComponent;
}());
FilemanagerComponent = __decorate([
    core_1.Component({
        selector: 'app-filemanager',
        templateUrl: './filemanager.component.html',
        styleUrls: ['./filemanager.component.css'],
        providers: [folder_service_1.FolderService, file_service_1.FileService, common_1.NgForOf],
    }),
    __metadata("design:paramtypes", [folder_service_1.FolderService, file_service_1.FileService])
], FilemanagerComponent);
exports.FilemanagerComponent = FilemanagerComponent;
//# sourceMappingURL=filemanager.component.js.map