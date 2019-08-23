import { ScriptLoaderService } from './../../services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.editLoader();
  }

  ngOnInit() {
  }

}
