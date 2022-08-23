"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StarterGuard = void 0;
var core_1 = require("@angular/core");
var StarterGuard = /** @class */ (function () {
    function StarterGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    StarterGuard.prototype.canActivate = function (route, state) {
        var logged = this.authService.isLoggedIn() || this.authService.ReadLocalStorage();
        if (logged) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    };
    StarterGuard = __decorate([
        core_1.Injectable()
    ], StarterGuard);
    return StarterGuard;
}());
exports.StarterGuard = StarterGuard;
