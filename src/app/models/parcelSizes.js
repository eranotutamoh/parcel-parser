"use strict";
var FreightSpecs_1 = require('../models/FreightSpecs');
var Parcel_1 = require('../models/Parcel');
exports.WEIGHTLIMIT = 25;
var smallPackage = new FreightSpecs_1.FreightSpecs('Small', new Parcel_1.Parcel(210, 280, 130), '5.00');
var mediumPackage = new FreightSpecs_1.FreightSpecs('Medium', new Parcel_1.Parcel(280, 390, 180), '7.50');
var largePackage = new FreightSpecs_1.FreightSpecs('Large', new Parcel_1.Parcel(380, 550, 200), '8.50');
//const extraLargePackage =
exports.parcelSizes = [smallPackage, mediumPackage, largePackage];
