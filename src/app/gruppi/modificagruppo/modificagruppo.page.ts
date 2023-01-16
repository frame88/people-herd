import { Component, OnInit } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modificagruppo',
  templateUrl: './modificagruppo.page.html',
  styleUrls: ['./modificagruppo.page.scss'],
})
export class ModificagruppoPage implements OnInit {

  iddi = +this.activatedRoute.snapshot.params['id'];
  constructor(
    private http: HttpClient,
    public central: CentralService,
    private activatedRoute: ActivatedRoute
  ) {
    this.central.getGroups();
    this.central.getRoles();
    this.central.getUsers();
   }

  ngOnInit() {
  }

}
