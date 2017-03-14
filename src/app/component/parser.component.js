"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var Parcel_1 = require('../models/Parcel');
var ParserComponent = (function () {
    function ParserComponent(freight, formBr) {
        this.freight = freight;
        this.formBr = formBr;
        this.createForm();
    }
    ParserComponent.prototype.createForm = function () {
        this.parselForm = this.formBr.group({
            p_length: ['', forms_1.Validators.required],
            p_breadth: ['', forms_1.Validators.required],
            p_height: ['', forms_1.Validators.required],
            p_weight: ['', forms_1.Validators.required]
        });
    };
    ParserComponent.prototype.onSubmit = function () {
        var parcel = new Parcel_1.Parcel(this.parselForm.value.p_length, this.parselForm.value.p_breadth, this.parselForm.value.p_height, this.parselForm.value.p_weight);
        console.log(this.freight.calculator(parcel));
        //console.log(JSON.stringify(this.parselForm.value));
        return false;
    };
    ParserComponent = __decorate([
        core_1.Component({
            selector: 'trademe-parser',
            templateUrl: '../html/parser.html'
        })
    ], ParserComponent);
    return ParserComponent;
}());
exports.ParserComponent = ParserComponent;
