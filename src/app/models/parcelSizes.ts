import { FreightSpecs } from '../models/FreightSpecs'
import { Parcel } from '../models/Parcel'


export const WEIGHTLIMIT = 25

const smallPackage =  new FreightSpecs('Small' , new Parcel(210,280,130), '5.00')
const  mediumPackage =  new FreightSpecs('Medium' , new Parcel(280,390,180), '7.50')
const  largePackage =  new FreightSpecs('Large' , new Parcel(380,550,200), '8.50')
//const extraLargePackage =

export const  parcelSizes: Array<FreightSpecs> = [smallPackage, mediumPackage, largePackage]
