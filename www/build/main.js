webpackJsonp([2],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutrientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NutrientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NutrientsPage = (function () {
    function NutrientsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        console.log("came into constructor");
        this.items = navParams.get('nutrientData');
        this.productName = this.capitalizeFirstLetter(navParams.get('productName'));
        this.storeOnMemory = navParams.get('storeOnMemory');
        console.log(this.items);
        console.log(this.navParams.get('calories'));
        if (this.storeOnMemory == "yes") {
            this.StoreOnMemory();
        }
        //this.navCtrl.remove(this.navCtrl.length()-1, 1)
    }
    NutrientsPage.prototype.StoreOnMemory = function () {
        var _this = this;
        //     let get = false
        //     console.log(this.items[i])
        //     this.storage.get(this.items[i].name).then((value) =>{
        //             let newValue = value + this.items[i].value
        //             this.storage.set(this.items[i].name, newValue)
        //             console.log("Updated Variable")
        //             console.log(this.items[i].name)
        //             console.log(newValue)
        //             console.log("---------------")
        //             get = true
        //     }).catch( (value) =>{
        //         this.storage.set(this.items[i].name, this.items[i].value)
        //     console.log("New Variable")
        //     console.log(this.items[i].name)
        //     console.log(this.items[i].value)
        //     console.log("---------------")
        // })
        console.log("Storing On Memory");
        this.storage.get("Energy").then(function (value) {
            var finalValue = parseFloat(value) + parseFloat(_this.navParams.get('calories'));
            console.log(finalValue);
            _this.storage.set("Energy", finalValue);
        }).catch(function (value) {
            _this.storage.set("Energy", 0);
        });
    };
    NutrientsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NutrientsPage');
    };
    NutrientsPage.prototype.capitalizeFirstLetter = function (string) {
        console.log("Entered Capitalize First Letter");
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    NutrientsPage.prototype.goBack = function () {
        this.navCtrl.popAll();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return NutrientsPage;
}());
NutrientsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nutrients',template:/*ion-inline-start:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\nutrients\nutrients.html"*/'<!--\n\n  Generated template for the NutrientsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="dark">\n\n\n\n        <ion-title>\n\n            {{productName}}\n\n        </ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="goBack()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Nutritional Information\n\n    </ion-card-header>\n\n    <ion-list inset>\n\n        <ion-item *ngFor="let item of items" text-wrap>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-6 text-wrap>{{item.name}}</ion-col>\n\n                  <ion-col col-3>{{item.value}}</ion-col>\n\n                  <ion-col col-3>{{item.unit}}</ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n        </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\nutrients\nutrients.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], NutrientsPage);

//# sourceMappingURL=nutrients.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nutrients_nutrients__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_preview__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(navCtrl, viewCtrl, navParams, http, cameraPreview) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.http = http;
        this.cameraPreview = cameraPreview;
        this.items = this.navParams.get('listData');
        console.log(this.items);
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.sendSelection = function (item) {
        this.selectedItem = item;
        this.justSelected = false;
    };
    PopoverPage.prototype.sendGetText = function () {
        this.selectedItem = this.otherText;
        this.justSelected = true;
    };
    PopoverPage.prototype.select = function (item, storeOnMemory) {
        var _this = this;
        var link = "http://192.168.137.70:3000/data";
        var myData = { name: item };
        this.http.post(link, myData).subscribe(function (data) {
            var nutrientArray = data.json();
            console.log(nutrientArray);
            var i = 0;
            var objArray = new Array();
            var calories = 0;
            var proteins = 0;
            var fat = 0;
            var sugar = 0;
            var carbohydrates = 0;
            var iron = 0;
            while (i < nutrientArray.length - 1) {
                console.log(nutrientArray[i].name);
                console.log(nutrientArray[i].value);
                console.log(nutrientArray[i].unit);
                i += 1;
                var ratio = _this.quantity / 100;
                if (nutrientArray[i].name === "Energy") {
                    calories = nutrientArray[i].value;
                }
                if (nutrientArray[i].name === "Protein") {
                    proteins = nutrientArray[i].value;
                }
                if (nutrientArray[i].name === "Total lipid (fat)") {
                    fat = nutrientArray[i].value;
                }
                if (nutrientArray[i].name === ("Sugars, total")) {
                    sugar = nutrientArray[i].value;
                }
                if (nutrientArray[i].name === ("Carbohydrate by difference")) {
                    carbohydrates = nutrientArray[i].value;
                }
                if (nutrientArray[i].name === ("Iron")) {
                    iron = nutrientArray[i].value;
                }
                var names = { name: nutrientArray[i].name, value: (ratio * parseInt(nutrientArray[i].value)).toFixed(1), unit: nutrientArray[i].unit };
                objArray = objArray.concat(names);
            }
            console.log(objArray);
            _this.cameraPreview.stopCamera();
            _this.navCtrl.popAll();
            console.log("Entered");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__nutrients_nutrients__["a" /* NutrientsPage */], {
                nutrientData: objArray,
                productName: item,
                storeOnMemory: storeOnMemory,
                calories: calories,
                proteins: proteins,
                fat: fat,
                sugar: sugar,
                carbohydrates: carbohydrates,
                iron: iron
            });
        }, function (error) {
            console.log(error.error);
        });
    };
    PopoverPage.prototype.eat = function () {
        if (this.justSelected) {
            this.selectedItem = this.otherText;
        }
        this.select(this.selectedItem, "yes");
    };
    PopoverPage.prototype.enquire = function () {
        if (this.justSelected) {
            this.selectedItem = this.otherText;
        }
        this.select(this.selectedItem, "no");
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-popover',template:/*ion-inline-start:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\popover\popover.html"*/'<!--\n\n  Generated template for the PopoverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class="masters">\n\n  <ion-list radio-group [(ngModel)]="content">\n\n    <ion-list-header>\n\n        <b>Items We Found</b>\n\n    </ion-list-header>\n\n    <ion-item *ngFor="let item of items">\n\n        <ion-label>{{item}}</ion-label>\n\n        <ion-radio checked = "false" value={{item}} (ionSelect)="sendSelection(item)"></ion-radio>\n\n    </ion-item>\n\n      <ion-item>\n\n          <ion-label>Other</ion-label>\n\n          <ion-radio checked = "false" value="other" (ionSelect)="sendGetText()"></ion-radio>\n\n      </ion-item>\n\n      <ion-item *ngIf="content == \'other\'">\n\n          <ion-label floating>Other</ion-label>\n\n          <ion-input type="text" [(ngModel)]="otherText"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label color="primary" floating>Quantity in Grams</ion-label>\n\n          <ion-input type = "number" [(ngModel)]="quantity"></ion-input>\n\n      </ion-item>\n\n  </ion-list>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-6><button ion-button icon-left color="dark" (click)="eat()">\n\n                <ion-icon name="restaurant"></ion-icon>\n\n                Eat\n\n            </button></ion-col>\n\n            <ion-col col-6><button ion-button icon-left color="dark" (click)="enquire()">\n\n                <ion-icon name="help"></ion-icon>\n\n                Enquire\n\n            </button></ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\popover\popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera_preview__["a" /* CameraPreview */]])
], PopoverPage);

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/nutrients/nutrients.module": [
		450,
		1
	],
	"../pages/popover/popover.module": [
		451,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n\n  <ion-tab [root]="tab1Root" tabTitle="Capture" tabIcon="camera"color="dark"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Tracker" tabIcon="analytics"color="dark"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Carbohydrates", "Proteins", "Sugars", "Fats", "Iron"],
                datasets: [{
                        label: '# of Votes',
                        data: [20, 10, 8, 5, 2],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["9AM", "12PM", "3PM", "6PM", "9PM", "12AM"],
                datasets: [
                    {
                        label: "Caloriesss",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [500, 1100, 1400, 1800, 1900, 1950],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    return AboutPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('doughnutCanvas'),
    __metadata("design:type", Object)
], AboutPage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], AboutPage.prototype, "lineCanvas", void 0);
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>\n\n      Data\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Food Intake\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #doughnutCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Calorie Counter\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #lineCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_popover_popover__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera_preview__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_android_full_screen__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_nutrients_nutrients__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import {HTTP} from '@ionic-native/http';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_popover_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_nutrients_nutrients__["a" /* NutrientsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/nutrients/nutrients.module#NutrientsPageModule', name: 'NutrientsPage', segment: 'nutrients', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_popover_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_nutrients_nutrients__["a" /* NutrientsPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera_preview__["a" /* CameraPreview */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_android_full_screen__["a" /* AndroidFullScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bn": 225,
	"./bn.js": 225,
	"./bo": 226,
	"./bo.js": 226,
	"./br": 227,
	"./br.js": 227,
	"./bs": 228,
	"./bs.js": 228,
	"./ca": 229,
	"./ca.js": 229,
	"./cs": 230,
	"./cs.js": 230,
	"./cv": 231,
	"./cv.js": 231,
	"./cy": 232,
	"./cy.js": 232,
	"./da": 233,
	"./da.js": 233,
	"./de": 234,
	"./de-at": 235,
	"./de-at.js": 235,
	"./de-ch": 236,
	"./de-ch.js": 236,
	"./de.js": 234,
	"./dv": 237,
	"./dv.js": 237,
	"./el": 238,
	"./el.js": 238,
	"./en-au": 239,
	"./en-au.js": 239,
	"./en-ca": 240,
	"./en-ca.js": 240,
	"./en-gb": 241,
	"./en-gb.js": 241,
	"./en-ie": 242,
	"./en-ie.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./eo": 244,
	"./eo.js": 244,
	"./es": 245,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es.js": 245,
	"./et": 247,
	"./et.js": 247,
	"./eu": 248,
	"./eu.js": 248,
	"./fa": 249,
	"./fa.js": 249,
	"./fi": 250,
	"./fi.js": 250,
	"./fo": 251,
	"./fo.js": 251,
	"./fr": 252,
	"./fr-ca": 253,
	"./fr-ca.js": 253,
	"./fr-ch": 254,
	"./fr-ch.js": 254,
	"./fr.js": 252,
	"./fy": 255,
	"./fy.js": 255,
	"./gd": 256,
	"./gd.js": 256,
	"./gl": 257,
	"./gl.js": 257,
	"./gom-latn": 258,
	"./gom-latn.js": 258,
	"./he": 259,
	"./he.js": 259,
	"./hi": 260,
	"./hi.js": 260,
	"./hr": 261,
	"./hr.js": 261,
	"./hu": 262,
	"./hu.js": 262,
	"./hy-am": 263,
	"./hy-am.js": 263,
	"./id": 264,
	"./id.js": 264,
	"./is": 265,
	"./is.js": 265,
	"./it": 266,
	"./it.js": 266,
	"./ja": 267,
	"./ja.js": 267,
	"./jv": 268,
	"./jv.js": 268,
	"./ka": 269,
	"./ka.js": 269,
	"./kk": 270,
	"./kk.js": 270,
	"./km": 271,
	"./km.js": 271,
	"./kn": 272,
	"./kn.js": 272,
	"./ko": 273,
	"./ko.js": 273,
	"./ky": 274,
	"./ky.js": 274,
	"./lb": 275,
	"./lb.js": 275,
	"./lo": 276,
	"./lo.js": 276,
	"./lt": 277,
	"./lt.js": 277,
	"./lv": 278,
	"./lv.js": 278,
	"./me": 279,
	"./me.js": 279,
	"./mi": 280,
	"./mi.js": 280,
	"./mk": 281,
	"./mk.js": 281,
	"./ml": 282,
	"./ml.js": 282,
	"./mr": 283,
	"./mr.js": 283,
	"./ms": 284,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 284,
	"./my": 286,
	"./my.js": 286,
	"./nb": 287,
	"./nb.js": 287,
	"./ne": 288,
	"./ne.js": 288,
	"./nl": 289,
	"./nl-be": 290,
	"./nl-be.js": 290,
	"./nl.js": 289,
	"./nn": 291,
	"./nn.js": 291,
	"./pa-in": 292,
	"./pa-in.js": 292,
	"./pl": 293,
	"./pl.js": 293,
	"./pt": 294,
	"./pt-br": 295,
	"./pt-br.js": 295,
	"./pt.js": 294,
	"./ro": 296,
	"./ro.js": 296,
	"./ru": 297,
	"./ru.js": 297,
	"./sd": 298,
	"./sd.js": 298,
	"./se": 299,
	"./se.js": 299,
	"./si": 300,
	"./si.js": 300,
	"./sk": 301,
	"./sk.js": 301,
	"./sl": 302,
	"./sl.js": 302,
	"./sq": 303,
	"./sq.js": 303,
	"./sr": 304,
	"./sr-cyrl": 305,
	"./sr-cyrl.js": 305,
	"./sr.js": 304,
	"./ss": 306,
	"./ss.js": 306,
	"./sv": 307,
	"./sv.js": 307,
	"./sw": 308,
	"./sw.js": 308,
	"./ta": 309,
	"./ta.js": 309,
	"./te": 310,
	"./te.js": 310,
	"./tet": 311,
	"./tet.js": 311,
	"./th": 312,
	"./th.js": 312,
	"./tl-ph": 313,
	"./tl-ph.js": 313,
	"./tlh": 314,
	"./tlh.js": 314,
	"./tr": 315,
	"./tr.js": 315,
	"./tzl": 316,
	"./tzl.js": 316,
	"./tzm": 317,
	"./tzm-latn": 318,
	"./tzm-latn.js": 318,
	"./tzm.js": 317,
	"./uk": 319,
	"./uk.js": 319,
	"./ur": 320,
	"./ur.js": 320,
	"./uz": 321,
	"./uz-latn": 322,
	"./uz-latn.js": 322,
	"./uz.js": 321,
	"./vi": 323,
	"./vi.js": 323,
	"./x-pseudo": 324,
	"./x-pseudo.js": 324,
	"./yo": 325,
	"./yo.js": 325,
	"./zh-cn": 326,
	"./zh-cn.js": 326,
	"./zh-hk": 327,
	"./zh-hk.js": 327,
	"./zh-tw": 328,
	"./zh-tw.js": 328
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 432;

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_popover__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_full_screen__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {HTTP} from '@ionic-native/http';



var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl, popOverCtrl, diagnostic, cameraPreview, http, loadingCtrl, androidFullScreen) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.popOverCtrl = popOverCtrl;
        this.diagnostic = diagnostic;
        this.cameraPreview = cameraPreview;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.androidFullScreen = androidFullScreen;
        this.splash = true;
        this.tabBarElement = document.querySelector('.tabbar');
        this.http = http;
        this.androidFullScreen.isImmersiveModeSupported().then(function () { return _this.androidFullScreen.immersiveMode(); })
            .catch(function (error) { return console.log(error); });
        this.initializePreview();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tabBarElement.style.display = 'none';
        setTimeout(function () {
            _this.splash = false;
            _this.tabBarElement.style.display = 'flex';
        }, 4000);
    };
    HomePage.prototype.checkPermissions = function () {
        var _this = this;
        this.diagnostic.isCameraAuthorized().then(function (authorized) {
            if (authorized)
                _this.initializePreview();
            else {
                _this.diagnostic.requestCameraAuthorization().then(function (status) {
                    if (status == _this.diagnostic.permissionStatus.GRANTED)
                        _this.initializePreview();
                    else {
                        _this.toastCtrl.create({
                            message: "Cannot access camera",
                            position: "bottom",
                            duration: 5000
                        }).present();
                    }
                });
            }
        });
    };
    HomePage.prototype.initializePreview = function () {
        var previewRect = {
            x: 0,
            y: 0,
            width: window.outerWidth,
            height: window.outerHeight,
            camera: 'rear',
            tapPhoto: true,
            previewDrag: true,
            toBack: true,
            alpha: 1
        };
        var that = this;
        this.cameraPreview.startCamera(previewRect).then(function () {
        }, function (error) {
            console.log('error', error);
        });
    };
    HomePage.prototype.takePicture = function () {
        var _this = this;
        var pictureOpts = {
            width: 500,
            height: 500,
            quality: 50
        };
        this.cameraPreview.takePicture(pictureOpts).then(function (imageData) {
            // var link = "http://172.25.150.65:3000/"
            // var link = "http://192.168.11.119:3000/"
            var loading = _this.loadingCtrl.create({
                spinner: 'dots',
                content: 'Loading Please Wait...'
            });
            loading.present();
            var link = "http://192.168.137.70:3000/recognize";
            var myData = { "img": encodeURIComponent(imageData.toString('base64')) };
            //let options =new RequestOptions({body: myData});
            _this.http.post(link, myData).subscribe(function (data) {
                console.log("Entered");
                console.log(data);
                var jsonData = data.json();
                console.log(jsonData);
                console.log(jsonData.images);
                var listData = jsonData.images;
                loading.dismiss();
                _this.popOverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popover_popover__["a" /* PopoverPage */], { listData: listData }).present();
            }, function (error) {
                console.log(error.error);
            });
            // this.http.post("http://192.168.137.137:3000/recognition", {img:"abc"}, {"Content-Type": "application/json"} )
            //     .then(data => {
            //         console.log(data.status)
            //         console.log(data.data)
            //         console.log(data.headers)
            //     }).catch(error => {
            //         console.log(error.status);
            //         console.log(error.error);
            //         console.log(error.headers);
            //     }
            // )
            // console.log(imageData.toString('base64'))
            // console.log("-------------------------------------------------------------------------------------")
            // console.log(encodeURIComponent(imageData.toString('base64')))
            // let body = {
            //     img: encodeURIComponent(imageData.toString('base64'))
            // }
            // let headers = new Headers();
            // headers.append('Content-Type', 'application/json')
            // console.log("Entered")
            // this.http.post("http://192.168.137.137:3000/recognition", {img: "abc"}, {
            //     headers: this.httpHeader.set('Content-Type', 'application/json')
            // })
            //     .subscribe(data => {
            //         console.log(data)
            //     }, error => {
            //         console.log(error)
            //     });
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.selectItem = function (item) {
        console.log(item);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\home\home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <div class="Aligner-item Aligner-item--top"></div>\n\n    <img src="assets/logo.png">\n\n    <div class="Aligner-item Aligner-item--bottom"></div>\n\n  </div>\n\n</div>\n\n\n\n<ion-header color="dark">\n\n<ion-navbar text-align="center" color="dark" class="bar bar-header">\n\n<img src="assets/logo.png" width="123" height="33" style = "left:50%; position:absolute; transform:translateX(-50%); margin-top: -3%" />\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="background-color-transparent" padding (click) = "takePicture()">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\aravi\Documents\Aravind\ECHacks\Munch\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_preview__["a" /* CameraPreview */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_full_screen__["a" /* AndroidFullScreen */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[330]);
//# sourceMappingURL=main.js.map