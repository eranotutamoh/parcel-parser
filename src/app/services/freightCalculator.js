"use strict";
var parcelSizes_1 = require('../models/parcelSizes');
var FreightCalculator = (function () {
    function FreightCalculator() {
        this.packageSizes = parcelSizes_1.parcelSizes;
    }
    FreightCalculator.prototype.calculator = function (parcel) {
        var _this = this;
        var userParcel = [parcel.length, parcel.breadth, parcel.height];
        if (!this.weightUnderLimit(parcel.weight))
            return { freightable: false, msg: 'Parcel is OVERWEIGHT', cost: null }; // Offer OVERWEIGHT service here
        var packagesize = this.packageSizes.find(function (pkg) {
            var limits = [pkg.parcel.length, pkg.parcel.breadth, pkg.parcel.height];
            return _this.findSize(userParcel, limits);
        });
        return (packagesize) ? { freightable: true, msg: packagesize.size + " parcel", cost: packagesize.cost } : { freightable: false, msg: 'Parcel is TOO LARGE', cost: null };
    };
    FreightCalculator.prototype.weightUnderLimit = function (weight) {
        return (weight <= parcelSizes_1.WEIGHTLIMIT);
    };
    FreightCalculator.prototype.findSize = function (userParcel, limits) {
        var passed = true;
        limits.sort(numericalOrder);
        userParcel.sort(numericalOrder);
        for (var i = 0; i < userParcel.length; i++) {
            if (userParcel[i] > limits[i]) {
                passed = false;
                break;
            }
        }
        return passed;
        function numericalOrder(a, b) {
            return a - b;
        }
    };
    return FreightCalculator;
}());
exports.FreightCalculator = FreightCalculator;
