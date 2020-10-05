import { Injectable } from '@angular/core';
import { BackendGraficosService } from './backend-graficos.service'


import data_line_barranquilla from "../../assets/static_examples/lineas/barranquilla_line/data.json"
import layout_line_barranquilla from "../../assets/static_examples/lineas/barranquilla_line/layout.json"
import data_line_bogota from "../../assets/static_examples/lineas/bogota_line/data.json"
import layout_line_bogota from "../../assets/static_examples/lineas/bogota_line/layout.json"
import data_line_bucaramanga from "../../assets/static_examples/lineas/bucaramanga_line/data.json"
import layout_line_bucaramanga from "../../assets/static_examples/lineas/bucaramanga_line/layout.json"
import data_line_cali from "../../assets/static_examples/lineas/cali_line/data.json"
import layout_line_cali from "../../assets/static_examples/lineas/cali_line/layout.json"
import data_line_medellin from "../../assets/static_examples/lineas/medellin_line/data.json"
import layout_line_medellin from "../../assets/static_examples/lineas/medellin_line/layout.json"
import data_line_santamarta from "../../assets/static_examples/lineas/santamarta_line/data.json"
import layout_line_satamarta from "../../assets/static_examples/lineas/santamarta_line/layout.json"
import data_map from "../../assets/static_examples/lineas/mapas/data.json"
import layout_map from "../../assets/static_examples/lineas/mapas/layout.json"



@Injectable({
  providedIn: 'root'
})
export class LibGraficaService {



    constructor(private httpjson: BackendGraficosService ) { }

    graficos = {
            barranquilla: { 
                    id: 1,
                    plotp: { data: data_line_barranquilla["data"], layout: layout_line_barranquilla["layout"]}
            },

            bogota: { 
                    id: 1,
                    plotp: { data: data_line_bogota["data"], layout: layout_line_bogota["layout"]}
            },
            bucaramanga: { 
                    id: 1,
                    plotp: { data: data_line_bucaramanga["data"], layout: layout_line_bucaramanga["layout"]}
            },
            cali: { 
                    id: 1,
                    plotp: { data: data_line_cali["data"], layout: layout_line_cali["layout"]}
            },
            medellin: { 
                    id: 1,
                    plotp: { data: data_line_medellin["data"], layout: layout_line_medellin["layout"]}
            },
            santamarta: { 
                    id: 1,
                    plotp: { data: data_line_santamarta["data"], layout: layout_line_satamarta["layout"]}
            },
            map: { 
                    id: 1,
                    plotp: { data: data_map["data"], layout: layout_map["layout"]}
            },
            
    }
}
