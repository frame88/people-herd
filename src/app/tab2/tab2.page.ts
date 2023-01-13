import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CentralService } from '../services/central.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(
    public central: CentralService,
    private http: HttpClient,
    private alertController: AlertController
  ) {
    this.central.getUsers();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Conferma',
      subHeader: '',
      message: 'Sei sicuro di voler eliminare questo utente?',
      buttons: [
        {
          text: 'si',
          role: 'cancel',
        }
        ,'no'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.central.getUsers();
  }

}
