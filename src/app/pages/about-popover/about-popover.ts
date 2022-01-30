import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://ionicframework.com/getting-started')">
        <ion-label>Seguro de carro</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://ionicframework.com/docs/')">
        <ion-label>Seguro de vida</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://showcase.ionicframework.com')">
        <ion-label>Seguro residencial</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://github.com/ionic-team/ionic')">
        <ion-label>Seguro para sua empresa</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Seguro viagem</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
