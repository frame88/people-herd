import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CentralService } from '../services/central.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gruppi',
  templateUrl: 'gruppi.page.html',
  styleUrls: ['gruppi.page.scss']
})
export class gruppiPage implements OnInit {

  color!: string;

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
    this.central.getGroups();
  }
}



