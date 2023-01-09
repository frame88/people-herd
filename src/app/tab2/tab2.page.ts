import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CentralService } from '../services/central.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public central: CentralService,
    private http: HttpClient
  ) {
    this.central.getUsers();
  }

}
