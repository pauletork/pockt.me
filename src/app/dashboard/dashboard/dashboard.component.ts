import { ScriptLoaderService } from './../../services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.dashboardLoader();
  }

  ngOnInit() {
  }

}
