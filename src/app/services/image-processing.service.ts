import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OwnerProperty } from '../_modelowner/adddata.model';
import { FileHandle } from '../_modelowner/file_handle.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer:DomSanitizer) { }


  public createImages(ownerProperty:OwnerProperty){
   const propertyimages:any[]= ownerProperty.propertyImage;
 const propertyimagesToFilehandle:FileHandle[]=[];
  
for(let i=0;i<propertyimages.length;i++){
  const imageFileData=propertyimages[i];
  //console.log("before imagefiledata",imageFileData);
const imageBlob=this.dataURLBlob(imageFileData.picByte,imageFileData.type)

const imageFile=new File([imageBlob],imageFileData.imageName,{type:imageFileData.type})

const finalFileHandle :FileHandle={
  file:imageFile,
 url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
};

propertyimagesToFilehandle.push(finalFileHandle);

}


ownerProperty.propertyImage=propertyimagesToFilehandle;
return ownerProperty;

}


public dataURLBlob(picByte: any, imageType: any){
 
const byteString=window.atob(picByte);
const arraybuffer= new ArrayBuffer(byteString.length);
const int8Array= new Uint8Array(arraybuffer);

for(let i=0;i<byteString.length;i++){
  int8Array[i]= byteString.charCodeAt(i);
}



const blob=new Blob([int8Array],{type:imageType})
return blob;

}


}
