(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../assets/menu_bar.svg\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n      <ion-button class=\"filter\">\n        <ion-icon name=\"funnel-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"search ion-padding\">\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Search Your Product\"></ion-input>\n      <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n\n  <div class=\"title ion-padding\">\n    <h2>Categories</h2>\n    <p>See all</p>\n  </div>\n\n  <div class=\"category-slider ion-padding-start\">\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor=\"let category of categories\">\n        <ion-col>\n          <h4>{{ category.name }}</h4>\n          <img src=\"{{ category.image }}\" />\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div class=\"title ion-padding\">\n    <h2 class=\"font-bold\">Featured</h2>\n    <p>See all</p>\n  </div>\n\n  <div class=\"product-slider ion-padding-start\">\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor=\"let product of featuredProducts\">\n        <ion-col class=\"ion-text-left\" routerLink=\"/item-details\" routerDirection=\"forward\">\n          <img src=\"{{ product.image }}\" />\n          <p>${{ product.price }}</p>\n          <h6>{{ product.name }}</h6>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div class=\"title ion-padding\">\n    <h2 class=\"font-bold\">Best Sell</h2>\n    <p>See all</p>\n  </div>\n\n  <div class=\"product-slider ion-padding-start\">\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor=\"let product of bestSellProducts\">\n        <ion-col class=\"ion-text-left\" routerLink=\"/item-details\" routerDirection=\"forward\">\n          <img src=\"{{ product.image }}\" />\n          <p>${{ product.price }}</p>\n          <h6>{{ product.name }}</h6>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DataService = class DataService {
    constructor() { }
    getCategories() {
        let categories = [];
        let cat1 = {
            id: 1,
            name: 'Womens',
            image: '../../assets/categories/category-1.png'
        };
        let cat2 = {
            id: 2,
            name: 'Mens',
            image: '../../assets/categories/category-2.png'
        };
        let cat3 = {
            id: 3,
            name: 'Kids',
            image: '../../assets/categories/category-3.png'
        };
        categories.push(cat1, cat2, cat3);
        return categories;
    }
    getFeaturedProducts() {
        let products = [];
        let prod1 = {
            id: 1,
            name: 'Womens T-Shirt',
            price: 55,
            image: '../../assets/products/prod-1.png'
        };
        let prod2 = {
            id: 2,
            name: 'Mens T-Shirt',
            price: 34,
            image: '../../assets/products/prod-2.png'
        };
        let prod3 = {
            id: 1,
            name: 'Womens T-Shirt',
            price: 40,
            image: '../../assets/products/prod-3.png'
        };
        products.push(prod1, prod2, prod3);
        return products;
    }
    getBestSellProducts() {
        let products = [];
        let prod1 = {
            id: 1,
            name: 'Womens T-Shirt',
            price: 55,
            image: '../../assets/products/prod-4.png'
        };
        let prod2 = {
            id: 2,
            name: 'Mens T-Shirt',
            price: 34,
            image: '../../assets/products/prod-5.png'
        };
        let prod3 = {
            id: 1,
            name: 'Womens T-Shirt',
            price: 40,
            image: '../../assets/products/prod-6.png'
        };
        products.push(prod1, prod2, prod3);
        return products;
    }
};
DataService.ctorParameters = () => [];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  margin-left: 10px;\n}\n\n.filter {\n  margin-right: 10px;\n}\n\n.search {\n  margin-bottom: 20px;\n}\n\n.search ion-item {\n  border-radius: 10px;\n  box-shadow: 0px 13px 30px 0px rgba(0, 0, 0, 0.09);\n  padding: 8px;\n}\n\n.search ion-item ion-icon {\n  margin-right: 16px;\n}\n\n.search ion-item ion-input {\n  padding-left: 10px !important;\n  border-left: 1px solid #F4F4F4;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n}\n\n.title h2 {\n  margin: 0 0 0 16px;\n  color: #434343;\n}\n\n.title p {\n  margin: 0 16px 0 0;\n  color: #656565;\n}\n\n.category-slider ion-slide {\n  width: 150px;\n  height: 100px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.product-slider {\n  margin-bottom: 30px;\n}\n\n.product-slider ion-slide {\n  width: 150px;\n  height: auto;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\nion-slide:focus {\n  outline: none !important;\n}\n\nion-col:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQ1E7RUFDSSxrQkFBQTtBQUNaOztBQUVRO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQUFaOztBQUtBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBRlI7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFIUjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFI7O0FBT1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMWjs7QUFPWTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FBTGhCOztBQVFZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0FBTmhCOztBQVlBO0VBQ0ksaUJBQUE7QUFUSjs7QUFZQTtFQUNJLG1CQUFBO0FBVEo7O0FBV0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUUjs7QUFZWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBVmhCOztBQWFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBWGhCOztBQWNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBWmhCOztBQW1CQTtFQUNJLHdCQUFBO0FBaEJKOztBQW1CQTtFQUNJLHdCQUFBO0FBaEJKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5maWx0ZXIge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNlYXJjaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0Y0RjRGNDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDAgMTZweCAwIDA7XG4gICAgICAgIGNvbG9yOiAjNjU2NTY1O1xuICAgIH1cbn1cblxuLmNhdGVnb3J5LXNsaWRlciB7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9udC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2R1Y3Qtc2xpZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgaW9uLXNsaWRlIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDYge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBSZW1vdmluZyBoaWdobGlnaHQgd2hlbiBmb2N1c2VkL2NsaWNrZWQgb24gcHJvZHVjdFxuaW9uLXNsaWRlOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2w6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



let HomePage = class HomePage {
    constructor(data) {
        this.data = data;
        this.categories = [];
        this.featuredProducts = [];
        this.bestSellProducts = [];
    }
    ngOnInit() {
        this.categories = this.data.getCategories();
        this.featuredProducts = this.data.getFeaturedProducts();
        this.bestSellProducts = this.data.getBestSellProducts();
    }
};
HomePage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map