import { CentralService } from '../services/central.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ruoli',
  templateUrl: 'ruoli.page.html',
  styleUrls: ['ruoli.page.scss']
})
export class ruoliPage {

  constructor(
    private http: HttpClient,
    public central: CentralService
  ) {
    this.central.getRoles();
  }

}
