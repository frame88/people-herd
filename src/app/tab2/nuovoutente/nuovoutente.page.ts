import { Component, OnInit } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuovoutente',
  templateUrl: './nuovoutente.page.html',
  styleUrls: ['./nuovoutente.page.scss'],
})
export class NuovoutentePage implements OnInit {

  constructor(
    private http: HttpClient,
    public central: CentralService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.central.getGroups();
    this.central.getRoles();
    this.central.getUsers();
  }

}
