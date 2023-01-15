import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CentralService } from '../services/central.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

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



