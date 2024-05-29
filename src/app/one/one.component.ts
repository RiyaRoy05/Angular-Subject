import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent implements OnInit {
  Component1Data:any;
  constructor(private dataSharing:DataSharingService){
    this.dataSharing.sharingData.subscribe(datas=>{
      this.Component1Data=datas;
    })
  }
  ngOnInit(): void {
      
  }
  onSubmit(data:any){
    this.dataSharing.sharingData.next(data.value);
  }
}
