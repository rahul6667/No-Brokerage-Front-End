import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileHandle } from 'src/app/_modelowner/file_handle.model';
@Component({
  selector: 'app-show-image-dialog',
  templateUrl: './show-image-dialog.component.html',
  styleUrls: ['./show-image-dialog.component.css']
})
export class ShowImageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.receiveImages();
  }


receiveImages(){

}


}
