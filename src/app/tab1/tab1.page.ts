import { Component } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    jsonData: any;
    constructor(private jsonService: JsonService) {}
    ngOnInit() {
      this.jsonService.getJsonData().subscribe(data => {
        this.jsonData = data;
        console.log(this.jsonData);
      });
    }
}
