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
    slideOpts = {
      initialSlide: 0,
      speed: 400,
    };
  
    slides = [
      {
        image: 'https://example.com/image1.jpg',
        title: 'Slide 1',
        description: 'Description for Slide 1',
      },
      {
        image: 'https://example.com/image2.jpg',
        title: 'Slide 2',
        description: 'Description for Slide 2',
      },
      {
        image: 'https://example.com/image3.jpg',
        title: 'Slide 3',
        description: 'Description for Slide 3',
      },
    ];
}
