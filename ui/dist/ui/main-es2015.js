(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav>\r\n  <a href=\"/home\">home</a>\r\n  <a href=\"/jobs\">jobs</a>\r\n  <a href=\"/customers\">customers</a>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-detail/customer-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-detail/customer-detail.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Customer Id: {{customer.customerId}}</p>\n<p>Name: {{customer.name}}</p>\n<p>Type: {{customer.type}}</p>\n\n<a [routerLink]=\"['/customers']\">Back</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table spacing=\"0\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let customer of customers|async\">\n      <td>{{customer.name}}</td>\n      <td>{{customer.type}}</td>\n      <td>\n        <a [routerLink]=\"['/customer', customer.customerId]\">Open</a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome to ServiceSight</h1>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-detail/job-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-detail/job-detail.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>JobId: {{job.jobId}}</p>\r\n<p>Engineer: {{job.engineer}}</p>\r\n<p>When: {{job.when | date:'shortDate'}}</p>\r\n\r\n<a [routerLink]=\"['/jobs']\">Back</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/job/job.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job/job.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>New job form</h2>\r\n\r\n<form #jobForm=\"ngForm\" (ngSubmit)=\"createJob(jobForm)\">\r\n\r\n  <label for=\"engineer\">Engineer</label>\r\n\r\n  <select name=\"engineer\" required #engineer=\"ngModel\" ngModel placeholder=\"Please select\" [(ngModel)]=\"newJob.engineer\">\r\n    <option [ngValue]=\"undefined\" selected>Please select</option>\r\n    <option *ngFor=\"let engineer of engineers\">{{engineer}}</option>\r\n  </select>\r\n  <small *ngIf=\"engineer.invalid\">Please select an engineer</small>\r\n\r\n  <label for=\"customer\">Customer</label>\r\n  <select name=\"customer\" required #customer=\"ngModel\" ngModel placeholder=\"Please select\" [(ngModel)]=\"newJob.customerId\">\r\n    <option [ngValue]=\"null\">Please select</option>\r\n    <option *ngFor=\"let customer of this.customers|async\" [ngValue]=\"customer.customerId\">{{customer.name}}</option>\r\n  </select>\r\n  <small *ngIf=\"customer.invalid\">Please select a customer</small>\r\n\r\n  <label for=\"when\">When</label>\r\n  <input type=\"date\" name=\"when\" [min]=\"getToday()\" onkeydown=\"return false\" ngModel required #when=\"ngModel\" [(ngModel)]=\"newJob.when\" />\r\n  <small *ngIf=\"when.invalid\">Please select a valid date</small>\r\n  <button type=\"submit\" [disabled]=\"jobForm.invalid\">Add Job</button>\r\n</form>\r\n\r\n<h2>Jobs list</h2>\r\n<table spacing=\"0\">\r\n  <thead>\r\n    <tr>\r\n      <th>Engineer</th>\r\n      <th>Customer</th>\r\n      <th>When</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let job of jobs\">\r\n      <td>{{job.engineer}}</td>\r\n      <td *ngIf=\"!job.customer\">Unknown</td>\r\n      <td *ngIf=\"job.customer\">{{job.customer?.name}}</td>\r\n      <td>{{job.when | date:'shortDate'}}</td>\r\n      <td>\r\n        <a [routerLink]=\"['/job', job.jobId]\">Open</a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-detail/job-detail.component */ "./src/app/job-detail/job-detail.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/customer-detail/customer-detail.component.ts");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'jobs', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'job/:id', component: _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_5__["JobDetailComponent"] },
    { path: 'customers', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"] },
    { path: 'customer/:id', component: _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  background-color: #002987;\n}\nnav a {\n  color: #fff;\n  padding: 20px 50px;\n  display: inline-block;\n  text-decoration: none;\n  text-transform: capitalize;\n  border-right: 1px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxha3NoYVxcc291cmNlXFxyZXBvc1xcRGV2VGVzdFxcdWkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjk4NztcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JlZW47XHJcbiAgfVxyXG59IiwibmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjk4Nztcbn1cbm5hdiBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmVlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./job-detail/job-detail.component */ "./src/app/job-detail/job-detail.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/customer-detail/customer-detail.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _job_job_component__WEBPACK_IMPORTED_MODULE_7__["JobComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_9__["JobDetailComponent"],
            _customer_customer_component__WEBPACK_IMPORTED_MODULE_10__["CustomerComponent"],
            _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_11__["CustomerDetailComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/customer-detail/customer-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/customer-detail/customer-detail.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWRldGFpbC9jdXN0b21lci1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/customer-detail/customer-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer-detail/customer-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailComponent", function() { return CustomerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");




let CustomerDetailComponent = class CustomerDetailComponent {
    constructor(route, customerService) {
        this.route = route;
        this.customerService = customerService;
        this.customerId = route.snapshot.params.id;
    }
    ngOnInit() {
        this.customerService.GetCustomer(this.customerId).subscribe(customer => this.customer = customer);
    }
};
CustomerDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }
];
CustomerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-detail/customer-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-detail.component.scss */ "./src/app/customer-detail/customer-detail.component.scss")).default]
    })
], CustomerDetailComponent);



/***/ }),

/***/ "./src/app/customer/customer.component.scss":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");




let CustomerComponent = class CustomerComponent {
    constructor(customerService) {
        this.customerService = customerService;
        this.types = [];
        this.newCustomer = {
            customerId: null,
            name: null,
            type: null
        };
    }
    ngOnInit() {
        this.customers = this.customerService.GetCustomers();
        this.types = ["Large", "Small"];
    }
    createCustomer(form) {
        if (form.invalid) {
            alert('form is not valid');
        }
        else {
            this.customerService.CreateCustomer(this.newCustomer).then(() => {
                this.customerService.GetCustomers().subscribe(customers => this.customers = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(customers));
            });
        }
    }
};
CustomerComponent.ctorParameters = () => [
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }
];
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.scss */ "./src/app/customer/customer.component.scss")).default]
    })
], CustomerComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/job-detail/job-detail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/job-detail/job-detail.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1kZXRhaWwvam9iLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/job-detail/job-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/job-detail/job-detail.component.ts ***!
  \****************************************************/
/*! exports provided: JobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailComponent", function() { return JobDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/job.service */ "./src/app/services/job.service.ts");




let JobDetailComponent = class JobDetailComponent {
    constructor(route, jobService) {
        this.route = route;
        this.jobService = jobService;
        this.jobId = route.snapshot.params.id;
    }
    ngOnInit() {
        this.jobService.GetJob(this.jobId).subscribe(job => this.job = job);
    }
};
JobDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"] }
];
JobDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/job-detail/job-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job-detail.component.scss */ "./src/app/job-detail/job-detail.component.scss")).default]
    })
], JobDetailComponent);



/***/ }),

/***/ "./src/app/job/job.component.scss":
/*!****************************************!*\
  !*** ./src/app/job/job.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  margin-left: 15px;\n}\n\nform {\n  margin: 15px;\n}\n\nform label {\n  display: block;\n}\n\nform input, form select, form button {\n  display: block;\n  width: 250px;\n  margin-bottom: 15px;\n}\n\nform small {\n  color: red;\n  margin-top: -12px;\n  margin-bottom: 15px;\n  display: block;\n}\n\ntable {\n  margin: 15px;\n  border-collapse: collapse;\n}\n\ntable th, table td {\n  border: 1px solid #ddd;\n  padding: 5px;\n  min-width: 100px;\n  text-align: left;\n}\n\ntable th {\n  background-color: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iL0M6XFxVc2Vyc1xcYWtzaGFcXHNvdXJjZVxccmVwb3NcXERldlRlc3RcXHVpL3NyY1xcYXBwXFxqb2JcXGpvYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvam9iL2pvYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNESjs7QURLQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBRElFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0Usc0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2pvYi9qb2IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbjogMTVweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBpbnB1dCwgc2VsZWN0LCBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgc21hbGwge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxudGFibGUge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cclxuICB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9XHJcbn0iLCJoMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5mb3JtIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuZm9ybSBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuZm9ybSBpbnB1dCwgZm9ybSBzZWxlY3QsIGZvcm0gYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmZvcm0gc21hbGwge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnRhYmxlIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxudGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogNXB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/job/job.component.ts":
/*!**************************************!*\
  !*** ./src/app/job/job.component.ts ***!
  \**************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_engineer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/engineer.service */ "./src/app/services/engineer.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");





let JobComponent = class JobComponent {
    constructor(engineerService, customerService, jobService) {
        this.engineerService = engineerService;
        this.customerService = customerService;
        this.jobService = jobService;
        this.engineers = [];
        this.jobs = [];
        this.newJob = {
            customerId: null,
            jobId: null,
            engineer: null,
            when: null,
            customer: null
        };
    }
    getToday() { return new Date().toISOString().split('T')[0]; }
    ngOnInit() {
        //  this.engineerService.GetEngineers().subscribe(engineers => this.engineers = engineers);
        this.jobService.GetJobs().subscribe(jobs => this.jobs = jobs);
        //   this.customerService.GetCustomers();
    }
    createJob(form) {
        if (form.invalid) {
            alert('form is not valid');
        }
        else {
            this.jobService.CreateJob(this.newJob).then(() => {
                this.jobService.GetJobs().subscribe(jobs => this.jobs = jobs);
            });
        }
    }
};
JobComponent.ctorParameters = () => [
    { type: _services_engineer_service__WEBPACK_IMPORTED_MODULE_2__["EngineerService"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
    { type: _services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"] }
];
JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/job/job.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./job.component.scss */ "./src/app/job/job.component.scss")).default]
    })
], JobComponent);



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CustomerService = class CustomerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    GetCustomers() {
        return this.httpClient.get('http://localhost:63235/customer').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    GetCustomer(customerId) {
        return this.httpClient.get(`http://localhost:63235/customer/${customerId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    CreateCustomer(customer) {
        return this.httpClient.post('http://localhost:63235/customer', customer).toPromise();
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "./src/app/services/engineer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/engineer.service.ts ***!
  \**********************************************/
/*! exports provided: EngineerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerService", function() { return EngineerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EngineerService = class EngineerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    GetEngineers() {
        return this.httpClient.get('http://localhost:63235/engineer');
    }
};
EngineerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EngineerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EngineerService);



/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let JobService = class JobService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    GetJobs() {
        return this.httpClient.get('http://localhost:63235/job');
    }
    GetJob(jobId) {
        return this.httpClient.get(`http://localhost:63235/job/${jobId}`);
    }
    CreateJob(job) {
        return this.httpClient.post('http://localhost:63235/job', job).toPromise();
    }
};
JobService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JobService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aksha\source\repos\DevTest\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map