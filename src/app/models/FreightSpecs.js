"use strict";
var FreightSpecs = (function () {
    function FreightSpecs(size, parcel, cost) {
        this.size = size;
        this.parcel = parcel;
        this.cost = cost;
    }
    return FreightSpecs;
}());
exports.FreightSpecs = FreightSpecs;
