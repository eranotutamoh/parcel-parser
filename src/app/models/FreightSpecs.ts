import { Parcel } from './Parcel'

export class FreightSpecs {

    constructor(
        public size: string,
        public parcel: Parcel,
        public cost: string,
    ) {}

}