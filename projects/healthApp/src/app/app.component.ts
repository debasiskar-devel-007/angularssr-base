import { OnInit, Input, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'healthApp';
  public testJsonData: any = { "data": "test", "others": "others test" };
}
