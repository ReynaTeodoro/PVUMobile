import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private browser: InAppBrowser) {
    this.openUrlApp();
   }
  openUrlApp(){
    const options: InAppBrowserOptions = {
      hideurlbar: 'yes'
    };
    this.browser.create('http://pvunidas.ar/', '_self', options );
    }
  openUrlWeb(){
    const options: InAppBrowserOptions = {
      hideurlbar: 'yes'
    };
    this.browser.create('http://pvunidas.ar/', '_system', options );
    }
}
