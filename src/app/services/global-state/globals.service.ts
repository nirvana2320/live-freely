import { Injectable } from '@angular/core';

import { globalState } from '../../states/index';
import { Global } from '../../interfaces/index';
 
@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  globalState;

  constructor() {
    this.globalState = globalState;
  }

  loadGlobalState(state: Global) {
    if (state) {
      this.globalState = state;
    }
  }

  saveGlobalState(): Blob {
    const blob = new Blob([JSON.stringify(this.globalState)], { type:`text/json` });
    return blob;
  }
}
