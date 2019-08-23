import { ScriptLoaderService } from './../../services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.loadLogin();
  }

  ngOnInit() {
  }

}
