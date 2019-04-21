(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todos/todos.component */ "./src/app/components/todos/todos.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");





var routes = [
    {
        path: "",
        component: _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"]
    },
    {
        path: "about",
        component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todos/todos.component */ "./src/app/components/todos/todos.component.ts");
/* harmony import */ var _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todo-item/todo-item.component */ "./src/app/components/todo-item/todo-item.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-todo/add-todo.component */ "./src/app/components/add-todo/add-todo.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_7__["TodosComponent"],
                _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__["TodoItemComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_10__["AddTodoComponent"],
                _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    display: flex;\r\n}\r\ninput[type=\"text\"] {\r\n    flex: 10;\r\n    padding: 5px;\r\n}\r\ninput[type=\"submit\"] {\r\n    flex: 2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdG9kby9hZGQtdG9kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLFlBQVk7QUFDaEI7QUFFQTtJQUNJLE9BQU87QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRvZG8vYWRkLXRvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBmbGV4OiAxMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBmbGV4OiAyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" (ngSubmit)=\"onSubmit()\">\n    <input\n        type=\"text\"\n        name=\"title\"\n        [(ngModel)]=\"title\"\n        placeholder=\"Add Todo...\"\n    />\n    <input type=\"submit\" value=\"Submit\" class=\"btn\" />\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddTodoComponent = /** @class */ (function () {
    function AddTodoComponent() {
        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddTodoComponent.prototype.ngOnInit = function () { };
    AddTodoComponent.prototype.onSubmit = function () {
        var todo = {
            title: this.title,
            completed: false
        };
        this.addTodo.emit(todo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddTodoComponent.prototype, "addTodo", void 0);
    AddTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-todo",
            template: __webpack_require__(/*! ./add-todo.component.html */ "./src/app/components/add-todo/add-todo.component.html"),
            styles: [__webpack_require__(/*! ./add-todo.component.css */ "./src/app/components/add-todo/add-todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddTodoComponent);
    return AddTodoComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    background: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n.header a {\r\n    color: #fff;\r\n    padding-right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaGVhZGVyIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <h1>TodoList</h1>\n    <nav><a routerLink=\"/\">Home</a> | <a routerLink=\"about\">About</a></nav>\n</header>\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/about/about.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>About</h1>\n    <p>\n        This is the angular TodoList app v1.0. It is part of a python Flask\n        integration\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-item {\r\n    background: #f4f4f4;\r\n    padding: 10px;\r\n    border-bottom: 1px #ccc dotted;\r\n}\r\n\r\n.is-complete {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.del {\r\n    background-color: #f00;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 5px 9px;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggI2NjYyBkb3R0ZWQ7XHJcbn1cclxuXHJcbi5pcy1jb21wbGV0ZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmRlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggOXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"setClasses()\">\n    <p>\n        <input (change)=\"onToggle(todo)\" type=\"checkbox\" />\n        {{ todo.title }}\n        <button (click)=\"onDelete(todo)\" class=\"del\">x</button>\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Todo */ "./src/app/models/Todo.ts");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/todo.service */ "./src/app/services/todo.service.ts");




var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(todoService) {
        this.todoService = todoService;
        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TodoItemComponent.prototype.ngOnInit = function () { };
    TodoItemComponent.prototype.setClasses = function () {
        var classes = {
            "todo-item": true,
            "is-complete": this.todo.completed
        };
        return classes;
    };
    TodoItemComponent.prototype.onToggle = function (todo) {
        // toggle in UI
        todo.completed = !todo.completed;
        //toggle on server
        this.todoService
            .toggleCompleted(todo)
            .subscribe(function (todo) { return console.log(todo); });
    };
    TodoItemComponent.prototype.onDelete = function (todo) {
        this.deleteTodo.emit(todo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Todo__WEBPACK_IMPORTED_MODULE_2__["Todo"])
    ], TodoItemComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TodoItemComponent.prototype, "deleteTodo", void 0);
    TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-todo-item",
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/components/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/components/todo-item/todo-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/components/todos/todos.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/todos/todos.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/todos/todos.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/todos/todos.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-todo (addTodo)=\"addTodo($event)\"></app-add-todo>\n<app-todo-item\n    *ngFor=\"let todo of todos\"\n    [todo]=\"todo\"\n    (deleteTodo)=\"deleteTodo($event)\"\n>\n</app-todo-item>\n"

/***/ }),

/***/ "./src/app/components/todos/todos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/todos/todos.component.ts ***!
  \*****************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/todo.service */ "./src/app/services/todo.service.ts");



var TodosComponent = /** @class */ (function () {
    function TodosComponent(todoService) {
        this.todoService = todoService;
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos().subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodosComponent.prototype.deleteTodo = function (todo) {
        // remove from UI
        this.todos = this.todos.filter(function (t) { return t.id != todo.id; });
        // remove from server
        this.todoService.deleteTodo(todo).subscribe();
    };
    TodosComponent.prototype.addTodo = function (todo) {
        var _this = this;
        this.todoService.addTodo(todo).subscribe(function (todo) {
            _this.todos.push(todo);
        });
    };
    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-todos",
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/components/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/components/todos/todos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/models/Todo.ts":
/*!********************************!*\
  !*** ./src/app/models/Todo.ts ***!
  \********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.todosUrl = "https://jsonplaceholder.typicode.com/todos";
        this.todosLimit = "?_limit=10";
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get("" + this.todosUrl + this.todosLimit);
    };
    TodoService.prototype.toggleCompleted = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.put(url, todo, httpOptions);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.delete(url, httpOptions);
    };
    TodoService.prototype.addTodo = function (todo) {
        return this.http.post(this.todosUrl, todo, httpOptions);
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dgcri\Desktop\PROJETOS\flask-angular-integration\angular-flask\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map