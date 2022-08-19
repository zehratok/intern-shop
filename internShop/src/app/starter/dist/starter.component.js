"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StarterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var StarterComponent = /** @class */ (function () {
    function StarterComponent(router, fb, restService, snackbarService) {
        this.router = router;
        this.fb = fb;
        this.restService = restService;
        this.snackbarService = snackbarService;
        this.showPassword = false;
    }
    StarterComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        console.log(this.loginForm.value);
    };
    StarterComponent.prototype.login = function () {
        this.restService.login(this.loginForm.value).subscribe(function (res) { });
        if (1) {
            this.snackbarService.createSnackbar('success', 'Login successful! Welcome.');
            this.router.navigate(['/shop']);
        }
        else {
        }
    };
    StarterComponent.prototype.showHidePassword = function () {
        this.showPassword = !this.showPassword;
    };
    StarterComponent = __decorate([
        core_1.Component({
            selector: 'app-starter',
            templateUrl: './starter.component.html',
            styleUrls: ['./starter.component.sass']
        })
    ], StarterComponent);
    return StarterComponent;
}());
exports.StarterComponent = StarterComponent;
