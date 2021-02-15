import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VendorSigninPage } from '../vendor/vendor-signin/vendor-signin.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public modalControl: ModalController) { }

  ngOnInit() {

  }
  
  async vendorLogin() {
    const modal = await this.modalControl.create({
      component: VendorSigninPage,
      animated: true,
      backdropDismiss: false,
      cssClass: 'vendorLogin-modal',
    })

    return await modal.present();
  }

}
