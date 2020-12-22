import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IStreamData } from './stream';
import { StreamService } from './stream.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class StreamComponent implements OnInit {

  streamData: IStreamData;
  video_url: SafeResourceUrl;
  chat_url: SafeResourceUrl;

  constructor(public media: MediaObserver, private streamingService: StreamService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.streamingService.getStreamingData$().subscribe(res => {
      // TODO: change to collection for multi-dynasty collection
      this.streamData = res[0];

      this.video_url= this.sanitizer.bypassSecurityTrustResourceUrl(this.streamData.video_url);
      this.chat_url= this.sanitizer.bypassSecurityTrustResourceUrl(this.streamData.chat_url);
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
