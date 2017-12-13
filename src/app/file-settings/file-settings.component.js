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
var filesettings_service_1 = require("./../filesettings.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FileSettingsComponent = (function () {
    function FileSettingsComponent(_fileSettingsService, router) {
        this._fileSettingsService = _fileSettingsService;
        this.router = router;
    }
    FileSettingsComponent.prototype.ngOnInit = function () {
        this.settings = this._fileSettingsService.getSettings();
        this.propertiesSaved = false;
    };
    FileSettingsComponent.prototype.saveSettings = function (maxHistoricalToDisplay) {
        // need to find better way
        this.settings.maxHistoricalToDisplay = maxHistoricalToDisplay;
        this._fileSettingsService.updateSettings(this.settings);
        this.propertiesSaved = true;
    };
    FileSettingsComponent.prototype.onConfirmationDialogClose = function () {
        this.propertiesSaved = false;
        this.router.navigate(["/clientreports"]);
    };
    FileSettingsComponent.prototype.onCancel = function () {
        this.router.navigate([""]);
    };
    FileSettingsComponent.prototype.addNewFileExtension = function (extension) {
        if (this.settings.acceptableFileExtensions.some(function (t) { return t === extension; }) == false) {
            this.settings.acceptableFileExtensions.push(extension);
        }
    };
    return FileSettingsComponent;
}());
FileSettingsComponent = __decorate([
    core_1.Component({
        selector: 'app-file-settings',
        templateUrl: './file-settings.component.html',
        styleUrls: ['./file-settings.component.css'],
        providers: [filesettings_service_1.FilesettingsService]
    }),
    __metadata("design:paramtypes", [filesettings_service_1.FilesettingsService, router_1.Router])
], FileSettingsComponent);
exports.FileSettingsComponent = FileSettingsComponent;
//# sourceMappingURL=file-settings.component.js.map