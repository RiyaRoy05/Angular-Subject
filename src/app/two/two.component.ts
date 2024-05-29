import { Component,OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent implements OnInit{
  Component2Data: any = '';  
  
  
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.sharingData.subscribe((res: any) => {  
      this.Component2Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    this.DataSharing.sharingData.next(data.value);  
  }

  ngOnInit(): void {
  }

}
