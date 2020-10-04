import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpExampleService {

  constructor(private http: HttpClient) { }

  configUrl = '/heatmaps.php/'; 

  request = {
    "is_timeheatmap": 0,
    "accumulative": 0,
    "records": [
        [
            "1",
            -74.8029,
            11.0039
        ],
        [
            "2",
            -74.8034,
            11.0044
        ],
        [
            "3",
            -74.8018,
            11.0056
        ],
        [
            "4",
            -74.8054,
            11.0032
        ],
        [
            "38",
            -74.833,
            10.9817
        ],
        [
            "39",
            -74.8364,
            10.9823
        ],
        [
            "40",
            -74.8321,
            10.982
        ]
    ]
}

 
authorizationData = 'Basic ' + btoa('pedroatencio@itm.edu.co' + ':' + 'a?!4z/nppCzD)S:(');

headerOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authorizationData
    })
};
  body=JSON.stringify(this.request)
  cabeceras = JSON.stringify(this.headerOptions)



  getJson() {
    return this.http.post(this.configUrl,this.body,this.headerOptions);
  }

}
