"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailsComponent = void 0;
var core_1 = require("@angular/core");
var cart_modal_component_1 = require("../cart-modal/cart-modal.component");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productService, dialog, route) {
        this.productService = productService;
        this.dialog = dialog;
        this.route = route;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.showDetails();
    };
    ProductDetailsComponent.prototype.showDetails = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.productService.getProductId(this.id).subscribe(function (res) {
            _this.product = res;
            console.log(_this.product);
        });
        console.log(this.id);
    };
    ProductDetailsComponent.prototype.addCart = function () {
        var dialog = this.dialog.open(cart_modal_component_1.CartModalComponent, {
            width: '300px',
            panelClass: 'cartDialog'
        });
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.sass']
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
