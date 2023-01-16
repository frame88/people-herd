import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CentralService } from '../services/central.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-utenti',
  templateUrl: 'utenti.page.html',
  styleUrls: ['utenti.page.scss']
})
export class utentiPage implements OnInit {

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
