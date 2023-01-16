import { Component, OnInit } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-modificautente',
  templateUrl: './modificautente.page.html',
  styleUrls: ['./modificautente.page.scss'],
})
export class ModificautentePage implements OnInit {
  iddi = +this.activatedRoute.snapshot.params['id'];
  hide = true;

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
