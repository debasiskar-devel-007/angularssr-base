import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-tool',
  templateUrl: './share-tool.component.html',
  styleUrls: ['./share-tool.component.css']
})
export class ShareToolComponent implements OnInit {
  public ConfigData: any = [
    { type: 'facebook', link: 'https://SoureshBanerjee.com' },
    { type: 'twitter', link: '' },
    { type: 'linkedin', link: '' },
    { type: 'tumbler', link: '' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
