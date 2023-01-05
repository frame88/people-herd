import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CentralService } from '../services/central.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(
    public http: HttpClient,
    public central: CentralService
    ) {
    this.central.getGroups();
    console.log('sono nel tab1 e ho preso i dati dal servizio', this.central.groups);
  }

}






// import { IGroups } from './../models/IGroups';
// import {AfterViewInit, Component, ViewChild} from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
// import { PeriodicElement } from '../models/IPeriodic';

// @Component({
//   selector: 'app-tab1',
//   templateUrl: 'tab1.page.html',
//   styleUrls: ['tab1.page.scss']
// })
// export class Tab1Page implements AfterViewInit {


//   displayedColumns: string[] = ['id', 'name', 'desciption', 'roule'];


//   constructor() {}

//   ngAfterViewInit() {
//   }

//   ELEMENT_DATA: IGroups[];
//   dataSource = new MatTableDataSource<IGroups>(this.ELEMENT_DATA);

// }


