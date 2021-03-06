import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {ThumbnailPipe} from '../pipes/thumbnail.pipe';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  mediaArray: any;

  constructor(public mediaService: MediaService, public thumbnail: ThumbnailPipe) { }


  ngOnInit() {
   this.mediaService.getNew().subscribe(data => {
      console.log(data);
      this.mediaArray = data;
/*
      this.mediaArray.map(media => {
        const temp = media.filename.split('.');
        media.thumbnail = temp[0] + '-tn320.png';
      });*/
      console.log(this.mediaArray);
    });
 }

}
