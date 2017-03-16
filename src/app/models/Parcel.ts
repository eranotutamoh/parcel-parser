export class Parcel {

    constructor(
        public length: number,
        public breadth: number,
        public height: number,
        public weight?: number
    ) {}


    getCubicMetre() {
        return (this.length/1000)*(this.breadth/1000)*(this.height/1000)
    }

}