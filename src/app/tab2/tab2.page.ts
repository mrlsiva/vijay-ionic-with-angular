import { Component } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  jsonData: any;
  constructor(private jsonService: JsonService) {}
  ngOnInit() {
    this.jsonService.getJsonData().subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData);
    });
  }
  videoId: string = 'v=2AnaCDISHPs';

}
