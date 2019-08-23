import { ScriptLoaderService } from './../../services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeScripts = [
  "assets/vendor/hs-megamenu/src/hs.megamenu.js",
  "assets/vendor/svg-injector/dist/svg-injector.min.js",
  "assets/vendor/typed.js/lib/typed.min.js",
  "assets/vendor/fancybox/jquery.fancybox.min.js",
  "assets/js/hs.core.js",
  "assets/js/components/hs.header.js",
  "assets/js/components/hs.svg-injector.js",
  "assets/js/components/hs.fancybox.js",
  "assets/js/components/hs.slick-carousel.js",
  "assets/js/components/hs.go-to.js",
  "assets/js/home.js"
  ]
  constructor(private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.loadScript(this.homeScripts)
  }

  ngOnInit() {
  }

}
