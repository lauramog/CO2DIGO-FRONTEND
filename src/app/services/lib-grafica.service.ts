import { Injectable } from '@angular/core';
import { BackendGraficosService } from './backend-graficos.service'

@Injectable({
  providedIn: 'root'
})
export class LibGraficaService {



    constructor(private httpjson: BackendGraficosService ) { }



    graficos = { 
    }
}
