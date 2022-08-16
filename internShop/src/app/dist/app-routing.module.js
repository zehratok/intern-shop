"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var error_component_1 = require("./error/error.component");
var product_details_component_1 = require("./shop/product-details/product-details.component");
var shop_component_1 = require("./shop/shop.component");
var shopping_cart_component_1 = require("./shop/shopping-cart/shopping-cart.component");
var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./starter/starter.module'); }).then(function (m) { return m.StarterModule; }); }
    },
    {
        path: "shop", component: shop_component_1.ShopComponent,
        loadChildren: function () { return Promise.resolve().then(function () { return require('./shop/shop.module'); }).then(function (m) { return m.ShopModule; }); }
    },
    {
        path: "shopping-cart", component: shopping_cart_component_1.ShoppingCartComponent
    },
    {
        path: "product-details/:id", component: product_details_component_1.ProductDetailsComponent
    },
    {
        path: '**',
        component: error_component_1.ErrorComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
