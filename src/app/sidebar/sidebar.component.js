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
var router_1 = require("@angular/router");
var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.items = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: "OEM DEV1" },
            { label: "OEM DEV2" },
            { label: "OEM DEV3" },
            { label: "Ad Hoc Reporting" },
            {
                label: "Customer Care Metrics",
                children: [
                    { label: "Client Reports", data: { link: ["/clientreports"] } },
                    { label: "Client Reports Admin" },
                    { label: "New Files Found", data: { link: [""] } }
                ],
                expanded: true,
            },
            { label: "Serivce Level" },
            { label: "ROCC" },
            { label: "Drug Vendor Reporting" },
        ];
    };
    SidebarComponent.prototype.onClick = function (node) {
        if (node.data["link"]) {
            this.router.navigate(node.data["link"]);
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map