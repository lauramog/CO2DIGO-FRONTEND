import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpExampleService } from '../../services/http-example.service';
import {LibGraficaService} from '../../services/lib-grafica.service';

//import layout from "../../../assets/base_json_graficos/box_plot/layout.json"


@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {



  constructor(public sanitizer: DomSanitizer, private httpjson: HttpExampleService, public libgrafica: LibGraficaService) {console.log(this.libgrafica.graficos)
   }



    ngOnInit():void {
        console.log(this.libgrafica.graficos.barranquilla.plotp.data)
  }

}
