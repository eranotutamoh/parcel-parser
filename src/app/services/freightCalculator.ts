import { FreightSpecs } from '../models/FreightSpecs'
import { Parcel } from '../models/Parcel'
import { WEIGHTLIMIT , parcelSizes } from '../models/parcelSizes'

export class FreightCalculator {


    private packageSizes: Array<FreightSpecs> = parcelSizes;

    calculator(parcel: Parcel) : Object {
        const userParcel  = [parcel.length, parcel.breadth, parcel.height];

        if(!this.weightUnderLimit(parcel.weight))  return {freightable: false, msg: 'Parcel is OVERWEIGHT', cost : null}  // Offer OVERWEIGHT service here

        const packagesize = this.packageSizes.find(pkg => {
            const limits = [pkg.parcel.length, pkg.parcel.breadth, pkg.parcel.height]
            return this.findSize(userParcel,limits);
        })

        return (packagesize) ?  {freightable: true, msg: `${packagesize.size} parcel`, cost : packagesize.cost}  : {freightable: false, msg: 'Parcel is TOO LARGE', cost : null}
    }

    private weightUnderLimit(weight:number) :boolean {
        return (weight <= WEIGHTLIMIT)
    }

    private findSize(userParcel: Array<number> ,limits: Array<number>): boolean {
    let passed = true;

    limits.sort(numericalOrder);
    userParcel.sort(numericalOrder);

    for(let i=0; i < userParcel.length; i++) {
        if(userParcel[i] > limits[i]) {
            passed = false;
            break;
        }
    }
    return passed;

    function numericalOrder(a, b) {
        return a - b;
    }
}

}