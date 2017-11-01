import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = false;

  constructor( private http:Http ) {

    this.cargar_productos();
  }

public cargar_productos(){

  if (this.productos.length === 0){

    this.cargando = true;
      this.http.get('https://sitioweb-1b830.firebaseio.com/productos_idx.json')
      .subscribe (res => {

        console.log(res.json());
        this.cargando = false;
      });
  }
}

}
