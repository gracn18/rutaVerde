import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Page } from '../models/Page';
import { AlertifyService } from '../services/alertify.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-calidad',
  templateUrl: './calidad.component.html',
  styleUrls: ['./calidad.component.scss']
})
export class CalidadComponent implements OnInit {
  _reload: boolean = true;

  constructor(private http:HttpClient, private alert: AlertifyService, public datepipe: DatePipe) { }

  calidads = [];
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': ['application/json','text/plain','*/*'], 
    'Accept': ['application/json','text/plain','*/*'],
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': ['GET','POST','PUT','DELETE']} )};

  control = true;
  rows = [];
  page = new Page();
  message: string | undefined;

  compare(a, b) {
    if (Number(a.Id) > Number(b.Id)) return -1;
    if (Number(b.Id) > Number(a.Id)) return 1;
  
    return 0;
  }

  ngOnInit(): void {
    this.control = true;
    this.page.size = 10;
    this.page.page = 0;
    this.page.totalElements = 274;//contar cantidad

    this.http.get('assets/sensor.json?_t=' + Date.now()).subscribe(sensor => {
      const sens = sensor['sensores'];
      const orden = sens.sort(this.compare);
      this.calidads = orden;
      this.rows = orden;
      this.ejecutarTarea();
    });
    
  }
  ejecutarTarea() {
    setTimeout(() => {
      const cons = this.calidads.length + 1;
      const fecha = this.datepipe.transform(new Date(), 'MM/dd/yyyy hh:mm:ss a');
      this.calidads.push({"Id":(cons),"Fecha":(fecha),"Temperature":"32.49 Celcius","Humidity":"52.23%","eCO2":"1284ug/m3","PM2comma5":"5ug/m3","PM10":"5ug/m3","NH3":"3.03PPM","NO2":"1.05PPM","CO":"64.22PPM","Latitud":"7.06218","Longitud":"-73.09141","Communication":"WIFI"});
      const orden = this.calidads.sort(this.compare);
      this.calidads = orden;
      this.rows = orden;
      this.reload();
      this.page.totalElements = cons;
      this.alert.success('Nuevo reporte en tiempo Real <br/> Registro nro:<b>' + cons + '</b><br/> Fecha: <b>' + fecha + '</b>');
      this.ejecutarTarea();
    }, 5000);
  }

  private reload() {
    setTimeout(() => this._reload = false);
    setTimeout(() => this._reload = true);
  }

  setPage(pageInfo) {
    this.page.page = pageInfo.offset;
    /*
      this.page.size = pagedData.size;
      this.page.page = pagedData.page;
      this.page.totalElements = pagedData.totalElements;
    */
  }

}
