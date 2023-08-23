import { Component } from '@angular/core';
import { JsonService } from '../json.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    jsonData: any;
    constructor(private jsonService: JsonService, private navCtrl: NavController) {}
    ngOnInit() {
      this.jsonService.getJsonData().subscribe(data => {
        this.jsonData = data;
        console.log(this.jsonData);
      });
    }
    showMovieDetails(movie: any) {
      //  alert(JSON.stringify(movie));
      this.navCtrl.navigateForward('/tabs/tab1/movie', { state: { movie } });
    }
}
