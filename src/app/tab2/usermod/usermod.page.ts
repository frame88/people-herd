import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usermod',
  templateUrl: './usermod.page.html',
  styleUrls: ['./usermod.page.scss'],
})
export class UsermodPage implements OnInit {

  iddi = +this.activatedRoute.snapshot.params['id'];

  constructor(
    public central: CentralService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.central.getUsers();
    this.central.getGroups();

  }

}
