import { Component,OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent implements OnInit {

  Component3Data: any = '';  
  
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.sharingData.subscribe((res: any) => {  
      this.Component3Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    this.DataSharing.sharingData.next(data.value);  
  } 

  ngOnInit(): void {
  }

}
