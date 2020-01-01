import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-tool',
  templateUrl: './share-tool.component.html',
  styleUrls: ['./share-tool.component.css']
})
export class ShareToolComponent implements OnInit {
  public ConfigData: any = [
    { type: 'facebook', link: 'https://SoureshBanerjee.com' },
    { type: 'twitter', link: 'https://google.com' },
    { type: 'linkedin', link: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { type: 'tumbler', link:'material.angular.io' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
