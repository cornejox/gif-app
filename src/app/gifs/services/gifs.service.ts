import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

    private apiKey: string = 'bRsqICV9sJhqwtOA1sYPz9O3cD1dTif3';
    public _historial: string[] = [];

    public resultados: any[] = [];

    get historial(){
        return [...this._historial];
    }

    constructor( private http: HttpClient){}

    buscarGifs(query: string = ''){

        query = query.trim().toLowerCase();
        if(!this._historial.includes(query)){
            this._historial.unshift(query);
            this._historial = this._historial.splice(0,10);
        };

        console.log(this._historial);

        this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=bRsqICV9sJhqwtOA1sYPz9O3cD1dTif3&q=${ query } z&limit=10`)
            .subscribe(( resp:any ) => {
                console.log(resp.data);
                this.resultados = resp.data;
            });
    }

    

}
