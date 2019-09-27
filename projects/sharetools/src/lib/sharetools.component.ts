import { Component, OnInit, Input } from '@angular/core';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'lib-sharetools',
  templateUrl: './sharetools.component.html',
  styleUrls: ['./sharetools.component.css']

})
export class SharetoolsComponent implements OnInit {

  public ConfigData: any = [];

  @Input()
  set Config(val: any) {
    this.ConfigData = (val) || '<no name set>';
    this.ConfigData = val;

  }

  constructor(private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '2391556517777524',
      xfbml: true,
      version: 'v2.8'
    };
    fb.init(initParams);

  }

  ngOnInit() {
  }

  share(url: string) {

    let params: UIParams = {
      href: url,
      method: 'share'
    };

    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }

  shareLink(url) {
    window.open(url, 'newwindow', 'width=400, height=400');
  }


}
