import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentralService } from 'src/app/services/central.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infogroup',
  templateUrl: './infogroup.page.html',
  styleUrls: ['./infogroup.page.scss'],
})
export class InfogroupPage implements OnInit {

  iddi = +this.activatedRoute.snapshot.params['id'];

  constructor(
    private http: HttpClient,
    public central: CentralService,
    private activatedRoute: ActivatedRoute
  ) {
    //console.log('total users', this.central.users);
    console.log('id = ', this.iddi);
  }

  ngOnInit() {
    this.central.getUsers();
    this.central.getGroups();
  }

  // cercaUsers(id: number, array: any) {
  //   const users = this.central.users;
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     if () {

  //     }

  //   }
  // }

}
