import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent  implements OnInit {
  movie: any;
  showLoader = true;
  loaderImage = '../../../assets/images/vijay/error_img/banner.png';
  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.movie = history.state.movie;
    console.log(this.movie);
  };

  showMainImage() {
    this.showLoader = false;
  }
  

  goBack() {
    this.navCtrl.back();
  }
}
