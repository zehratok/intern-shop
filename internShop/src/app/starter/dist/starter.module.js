"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StarterModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var starter_routing_module_1 = require("./starter-routing.module");
var starter_component_1 = require("./starter.component");
var register_component_1 = require("./register/register.component");
var input_1 = require("@angular/material/input");
var icon_1 = require("@angular/material/icon");
var select_1 = require("@angular/material/select");
var forms_1 = require("@angular/forms");
var snack_bar_1 = require("@angular/material/snack-bar");
var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = __decorate([
        core_1.NgModule({
            declarations: [
                starter_component_1.StarterComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                common_1.CommonModule,
                starter_routing_module_1.StarterRoutingModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                select_1.MatSelectModule,
                forms_1.ReactiveFormsModule,
                snack_bar_1.MatSnackBarModule
            ]
        })
    ], StarterModule);
    return StarterModule;
}());
exports.StarterModule = StarterModule;
