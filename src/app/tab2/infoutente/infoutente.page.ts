import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-infoutente',
  templateUrl: './infoutente.page.html',
  styleUrls: ['./infoutente.page.scss'],
})
export class infoutentePage implements OnInit {

  iddi = +this.activatedRoute.snapshot.params['id'];
  hide = true;

  constructor(
    public central: CentralService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute

  ) {}

  ngOnInit() {
    this.central.getUsers();
    this.central.getGroups();
  }

}
