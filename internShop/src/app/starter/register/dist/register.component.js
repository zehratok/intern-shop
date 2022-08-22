"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, snackbarService, fb, authService) {
        this.router = router;
        this.snackbarService = snackbarService;
        this.fb = fb;
        this.authService = authService;
        this.showPassword = false;
        this.UserType = ['User', 'Admin'];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            userName: ['', forms_1.Validators.required || forms_1.Validators.maxLength(20)],
            password: ['', forms_1.Validators.required || forms_1.Validators.minLength(8) && forms_1.Validators.maxLength(20)],
            userType: ['', forms_1.Validators.required]
        });
    };
    RegisterComponent.prototype.changeType = function (e) {
        var _a;
        (_a = this.UserType) === null || _a === void 0 ? void 0 : _a.setValue(e.target.value, {
            onlySelf: true
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "userType", {
        get: function () {
            return this.registerForm.get('userType');
        },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.registerForm.value).subscribe(function (res) {
            _this.snackbarService.createSnackbar('success', 'Registration Successful! You can login now!');
            _this.router.navigate(['/']);
        }, function (err) {
            _this.snackbarService.createSnackbar('error', 'Registration Failed! Please try again!');
            _this.registerForm.reset();
        });
    };
    RegisterComponent.prototype.showHidePassword = function (event) {
        this.showPassword = !this.showPassword;
        return event.preventDefault();
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.sass']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
