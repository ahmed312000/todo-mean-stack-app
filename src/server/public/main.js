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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<app-todo></app-todo>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todo_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/todo.service */ "./src/app/todo/todo.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [_todo_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todo/models/bg.ts":
/*!***********************************!*\
  !*** ./src/app/todo/models/bg.ts ***!
  \***********************************/
/*! exports provided: Bg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bg", function() { return Bg; });
var Bg = /** @class */ (function () {
    function Bg(name) {
        this.name = name;
    }
    return Bg;
}());



/***/ }),

/***/ "./src/app/todo/models/todo.ts":
/*!*************************************!*\
  !*** ./src/app/todo/models/todo.ts ***!
  \*************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(content, userId, todoId) {
        this.content = content;
        this.userId = userId;
        this.todoId = todoId;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/todo/models/user.ts":
/*!*************************************!*\
  !*** ./src/app/todo/models/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#todo {\r\n    margin : 20px 0 20px 0 ;\r\n    opacity: 0.5 !important;\r\n\r\n}\r\n#drop {\r\n    float : right ;\r\n    font-family: Tahoma ;\r\n    font-weight: 100 ;\r\n    color : #D02F2F ;\r\n    display : none ;\r\n}\r\n.hidden {\r\n    visibility: hidden;\r\n}\r\n.inputCustom {\r\n    border-radius: 20px ;\r\n    margin-top : 70px ;\r\n}\r\n.btnCustom {\r\n    border-radius: 30px ;\r\n    margin-top : 16px ;\r\n}\r\n/* .bg-image {\r\n    height: 500px;\r\n    background-image: url(../images/page2.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-color: #0E1138 ;\r\n    /* width : auto ;\r\n    height: auto; */\r\n.bg-image {\r\n        /* background: url(../images/page4.jpg) no-repeat center center fixed; */\r\n        \r\n      }\r\n.itemCustom {\r\n    background-color: #0E1138 !important ;\r\n    color : white ;\r\n}\r\n#customInput {\r\n    border : 0 !important;\r\n    opacity: 0.7 ;\r\n}\r\n#toggle {\r\n    float: right;\r\n    margin-top : 30px;\r\n    opacity : 0.5 ;\r\n    background-color: brown ;\r\n    color : white;\r\n    border-radius: 30px ;\r\n    margin-bottom: 20px ;\r\n}\r\n.page4 {\r\n    background: url('page4.jpg') no-repeat center center fixed;\r\n\r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.page5 {\r\n    background: url('page5.jpg') no-repeat center center fixed;\r\n\r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.page6 {\r\n    background: url('page6.jpg') no-repeat center center fixed;\r\n\r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.page7 {\r\n    background: url('page7.jpg') no-repeat center center fixed;\r\n\r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.page8 {\r\n    background: url('page8.jpg') no-repeat center center fixed;\r\n\r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.page9 {\r\n    background: url('page9.jpg') no-repeat center center fixed;\r\n\r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.page10 {\r\n    background: url('page10.jpg') no-repeat center center fixed;\r\n\r\n    background-size: cover;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.itemCustom:active ,\r\n.itemCustom:hover #drop {\r\n    display: inline ;\r\n}\r\n#refresh {\r\n    float: left;\r\n    margin-top : 30px;\r\n    opacity : 0.5 ;\r\n    background-color: brown ;\r\n    color : white;\r\n    border-radius: 30px ;\r\n    margin-bottom: 20px ;\r\n}"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\t<div [ngClass]=\"{\r\n\t    'page4' : ispage4,\r\n\t     'page5' : ispage5,\r\n\t     'page6' : ispage6,\r\n\t     'page7' : ispage7,\r\n\t     'page8' : ispage8,\r\n\t     'page9' : ispage9,\r\n\t     'page10' : ispage10\r\n\r\n\t    }\" class=\"bg-image img-responsive\">\r\n\t        <div>\r\n\r\n\t        \t<div class=\"container\">\r\n\r\n\r\n\t\t\t\t\t\t<button class=\"btn\" (click)=\"onToggled()\" id=\"toggle\" >Toggle</button>\r\n\t\t\t\t\t\t<button class=\"btn\" id=\"refresh\" (click)=\"onRefresh()\" >Refresh</button>\r\n\t    \r\n\t    \r\n\t                        <form [formGroup]=\"f\" (ngSubmit)=\"onAdd(input)\">\r\n\t                            <input id=\"customInput\" formControlName=\"input\" type=\"text\" #input class=\"form-control inputCustom\" placeholder=\"add your todos here\">\r\n\t                    \r\n\t                            <button [disabled]=\"f.invalid\" class=\"btn btn-primary btnCustom\" type='submit'>Add Todo</button>\r\n\t                        </form>\r\n\t                    \r\n\t                        <div id=\"todo\">\r\n\t                            <ul class=\"list-group\" >\r\n\t                                <li\r\n\t                                (click)=\"onDelete(todo.todoId , i)\" \r\n\t                                class=\"list-group-item itemCustom\" id =\"todo-item\" \r\n\t                                *ngFor=\"let todo of todos ; i as index\">{{ todo.content }}<span \r\n\t                                 id=\"drop\">drop</span></li>\r\n\t                            </ul>\r\n\t                        </div>\r\n\t                    \r\n\t                    \r\n\t                        \r\n\r\n\r\n\t        </div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo/todo.service.ts");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/todo */ "./src/app/todo/models/todo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_bg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/bg */ "./src/app/todo/models/bg.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoComponent = /** @class */ (function () {
    function TodoComponent(ts) {
        this.ts = ts;
        this.BGs = [
            new _models_bg__WEBPACK_IMPORTED_MODULE_4__["Bg"](),
            new _models_bg__WEBPACK_IMPORTED_MODULE_4__["Bg"](),
            new _models_bg__WEBPACK_IMPORTED_MODULE_4__["Bg"](),
            new _models_bg__WEBPACK_IMPORTED_MODULE_4__["Bg"](),
            new _models_bg__WEBPACK_IMPORTED_MODULE_4__["Bg"](),
            new _models_bg__WEBPACK_IMPORTED_MODULE_4__["Bg"](),
            new _models_bg__WEBPACK_IMPORTED_MODULE_4__["Bg"]() // 6
        ];
        // bgName = 'page5' ;
        this.ispage4 = true;
        this.ispage5 = false;
        this.ispage6 = false;
        this.ispage7 = false;
        this.ispage8 = false;
        this.ispage9 = false;
        this.ispage10 = false;
        this.n = 0;
        this.counter = 4;
        this.f = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            input: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.todos = [new _models_todo__WEBPACK_IMPORTED_MODULE_2__["Todo"]('Welcome To My App')];
    }
    Object.defineProperty(TodoComponent.prototype, "input", {
        get: function () {
            return this.f.get('input');
        },
        enumerable: true,
        configurable: true
    });
    TodoComponent.prototype.sorting = function () {
        if (this.todos) {
            this.todos.reverse();
        }
        else { }
    };
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.getTodos().subscribe(function (data) {
            _this.todos = data;
        }, function (err) { console.log(err); });
        if (!localStorage.getItem('token')) {
            this.ts.createUser().subscribe(function (data) {
                console.log(data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', data.obj._id);
            }, function (err) { return console.log(err); });
        }
    };
    TodoComponent.prototype.onAdd = function (input) {
        // let todo = new Todo({
        //     content : input.value ,
        //     userId : this.userId
        // })
        var _this = this;
        var todo = {
            content: input.value,
            userId: localStorage.getItem('id')
        };
        this.ts.createTodo(todo).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
        if (this.todos) {
            this.todos.splice(0, 0, todo);
        }
        // setTimeout(() => {
        //     this.ts.getTodos().subscribe(data => {
        //         this.todos = data ;
        //     }, err => {console.log(err)})
        // },200)
        this.ts.getTodos().subscribe(function (data) {
            _this.todos = data;
        }, function (err) { console.log(err); });
        this.f.reset();
    };
    TodoComponent.prototype.onDelete = function (id, i) {
        // setTimeout(() => {
        //     this.ts.deleteTodo(id).subscribe(data => console.log(data) , err => console.log(err))
        var _this = this;
        // } , 600)
        this.todos.splice(i, 1);
        if (id) {
            this.ts.deleteTodo(id).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
        }
        else {
            this.ts.getTodos().subscribe(function (data) {
                _this.todos = data;
            }, function (err) { console.log(err); });
        }
        // this.todos.splice(i , 1)
        // setTimeout(()=> {
        //     this.ts.getTodos().subscribe(data => {
        //         this.todos = data ;
        //     }, err => {console.log(err)})
        // },610)
        this.ts.getTodos().subscribe(function (data) {
            _this.todos = data;
        }, function (err) { console.log(err); });
    };
    TodoComponent.prototype.onToggled = function () {
        if (this.counter === 11) {
            this.counter = 4;
        }
        if (this.n === 7) {
            this.n = 0;
        }
        var arr = this.BGs.slice(this.n, this.n + 1);
        // let name = arr[0].name ;
        this.ispage4 = false;
        this.ispage5 = false;
        this.ispage6 = false;
        this.ispage7 = false;
        this.ispage8 = false;
        this.ispage9 = false;
        this.ispage10 = false;
        "" + (this['ispage' + this.counter] = true); // generates this.ispage + counter
        this.counter++;
        this.n++;
    };
    TodoComponent.prototype.onRefresh = function () {
        var _this = this;
        this.ts.getTodos().subscribe(function (data) {
            _this.todos = data;
        }, function (err) { console.log(err); });
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.service.ts":
/*!**************************************!*\
  !*** ./src/app/todo/todo.service.ts ***!
  \**************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/todo */ "./src/app/todo/models/todo.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/user */ "./src/app/todo/models/user.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.url = '';
        // private url = 'http://localhost:3000'
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        // getDecodedAccessToken(): any {
        //     if(localStorage.getItem('token')) {
        //         return jwt_decode(localStorage.getItem('token') );
        //     }
        //     else {}
        //   }
        this.todos = [
            new _models_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"]('finish home work'),
            new _models_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"]('feed the dog'),
            new _models_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"]('feed the cat'),
            new _models_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"]('make dinner')
        ];
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.url + '/todo' + '/get-all' + '/' + localStorage.getItem('id'), { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var todos = res.json().obj;
            var transformedArray = [];
            for (var _i = 0, todos_1 = todos; _i < todos_1.length; _i++) {
                var todo = todos_1[_i];
                transformedArray.splice(0, 0, new _models_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"](todo.content, localStorage.getItem('id'), todo._id));
            }
            return transformedArray;
        }));
    };
    TodoService.prototype.createUser = function () {
        var user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        var body = JSON.stringify(user);
        return this.http.post(this.url + '/user', body, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.createTodo = function (todo) {
        var body = JSON.stringify(todo);
        return this.http.post(this.url + '/todo', body, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.http.delete(this.url + '/todo/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\apps\todoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map