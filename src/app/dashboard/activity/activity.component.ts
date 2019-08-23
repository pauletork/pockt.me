import { ScriptLoaderService } from './../../services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(private scriptLoader: ScriptLoaderService) { 
    this.scriptLoader.activityLoader();
  }

  ngOnInit() {
  }

}
