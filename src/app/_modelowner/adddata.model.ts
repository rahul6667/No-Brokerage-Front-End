import { FileHandle } from "./file_handle.model";

export interface OwnerProperty{
propertyId: any;
//map(arg0: (ownerPropert: OwnerProperty) => OwnerProperty): any;
propertyName:String,
city:String,
location:String,
address:String,
pricerange:number,
bhk:String,
availability:String,
typeRoom:String,
facility:String,
nearLocation:String,
typeFamily:String,
parking:String,
propertyImage:FileHandle[]
}