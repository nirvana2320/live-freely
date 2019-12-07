import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { GlobalsService } from '../../../../services/global-state/globals.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  title:string;
  fileUrl;

  constructor(
    private _globalStateService: GlobalsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.title = this._globalStateService.globalState.game.title;
  
    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this._globalStateService.saveGlobalState()));
  }
}
