import { Component, OnInit , Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'lib-youtube-viewer',
  templateUrl: './youtube-viewer.component.html',
  styleUrls: ['./youtube-viewer.component.css']
})
export class YoutubeViewerComponent implements OnInit {
  id:any;
  vimeo:any;
  public isVimeo:boolean=false;
  @Input()          
  set videoid(id: any) {
    console.log("data",id);
    this.id = (id) || '<no name set>';
    this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+id);
  }

  @Input()          
  set Vimeovideoid(vimeo: any) {
    this.vimeo = (vimeo) || '<no name set>';
    this.vimeo = this.sanitizer.bypassSecurityTrustResourceUrl("https://player.vimeo.com/video/"+vimeo);
    this.isVimeo=true;
  }
  constructor(public sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
  }

}
