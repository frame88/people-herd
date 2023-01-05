import { CentralService } from './../services/central.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public http: HttpClient,
    public central: CentralService
  ) {
    this.central.getRoles();
  }

}
