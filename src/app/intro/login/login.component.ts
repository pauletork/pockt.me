import { ScriptLoaderService } from './../../services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private scriptLoad: ScriptLoaderService) {
    this.scriptLoad.loadLogin();
  }

  ngOnInit() {
  }

}
