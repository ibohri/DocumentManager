"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_reports_component_1 = require("./client-reports/client-reports.component");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var tree_1 = require("primeng/components/tree/tree");
var button_1 = require("primeng/components/button/button");
var autocomplete_1 = require("primeng/components/autocomplete/autocomplete");
var dialog_1 = require("primeng/components/dialog/dialog");
var dragdrop_1 = require("primeng/components/dragdrop/dragdrop");
var app_component_1 = require("./app.component");
var filemanager_component_1 = require("./filemanager/filemanager.component");
var fileupload_1 = require("primeng/components/fileupload/fileupload");
var router_1 = require("@angular/router");
var file_settings_component_1 = require("./file-settings/file-settings.component");
var topbar_component_1 = require("./topbar/topbar.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            filemanager_component_1.FilemanagerComponent,
            client_reports_component_1.ClientReportsComponent,
            file_settings_component_1.FileSettingsComponent,
            topbar_component_1.TopbarComponent,
            sidebar_component_1.SidebarComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            fileupload_1.FileUploadModule,
            dragdrop_1.DragDropModule,
            button_1.ButtonModule,
            autocomplete_1.AutoCompleteModule,
            tree_1.TreeModule,
            dialog_1.DialogModule,
            router_1.RouterModule.forRoot([
                { path: "", component: filemanager_component_1.FilemanagerComponent },
                { path: "clientreports", component: client_reports_component_1.ClientReportsComponent },
                { path: "filesettings", component: file_settings_component_1.FileSettingsComponent },
            ])
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        exports: [router_1.RouterModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map