import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpExampleService } from '../../services/http-example.service';

//import layout from "../../../assets/base_json_graficos/box_plot/layout.json"


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  
  public graph = {
        data: [
            { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
            { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
        ],
        layout: {width: 320, height: 240, title: 'A Fancy Plot'}
    };




  constructor(public sanitizer: DomSanitizer, private httpjson: HttpExampleService) {
   }




  ngOnInit():void {
     
  }

}
