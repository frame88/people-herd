import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CentralService } from '../services/central.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(
    private http: HttpClient,
    public central: CentralService
    ) {
    this.central.getGroups();
  }

}



